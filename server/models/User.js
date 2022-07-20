const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const { Schema } = mongoose;

// const feedingSchema = require("./Feeding");
const Feeding = require("./Feeding");
// const feedingSchema = require("./Feeding");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    babyName: {
      type: String,
      required: true,
    },
    parentName: {
      type: String,
      required: true,
    },
    feedings: [Feeding.schema],
  },

  {
    toJson: {
      virtuals: true,
    },
  }
);

// set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
