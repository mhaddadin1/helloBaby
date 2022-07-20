const { AuthenticationError } = require("apollo-server-express");
const { User, Feeding } = require("../models");

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
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    removeUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId });
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

    addFeeding: async (parent, { amount }, context) => {
      if (context.user) {
        const updateFeeding = new Feeding({ amount });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          {
            $push: { feedings: updateFeeding },
          },
          {
            new: true,
          }
        );
        return updateFeeding;
      }
    },
  },
};

module.exports = resolvers;
