const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },

    // feeding: async (parent, { amount }, context) => {
    //   if (context.feeding) {
    //     const feeding = await Feeding.findById(context.feeding._id);

    //     return feeding;
    //   }
    // },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    addFeeding: async (parent, { amountData }, context) => {
      if (context.user) {
        const updateFeeding = await User.findByIdAndUpdate(
          { _id: context.user._id },
          {
            $push: { feedings: amountData },
          },
          {
            new: true,
          }
        );
        return updateFeeding;
      }
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
