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
    timestamps: true,
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

// Feeding stats
userSchema.virtual("feeding_stats").get(function () {
  let stats = {};
  let userFeeding = this.feedings;
  // total
  // function getTotalFeeding(feedings) {
  //   let total = 0;
  //   feedings.map((feeding) => (total += feeding.amount));
  //   return total;
  // }
  // weekly
  function getWeeklyFeeding(feedings) {
    let thisWeek = new Date().toISOString().slice(0, 10);
    let weeklyFeedings = feedings.filter(
      (feeding) => feeding.createdAt.toISOString().slice(0, 10) === thisWeek
    );

    let total = 0;
    weeklyFeedings.map((feeding) => (total += feeding.amount));
    return total;
  }
  // today
  function getTodayFeeding(feedings) {
    let today = new Date().toISOString().slice(0, 10);

    let todaysfeeding = feedings.filter(
      (feeding) => feeding.createdAt.toISOString().slice(0, 10) === today
    );

    let total = 0;
    todaysfeeding.map((feeding) => (total += feeding.amount));
    return total;
  }

  // stats.totalAmount = getTotalFeeding(userFeeding);
  stats.weeklyAmount = getWeeklyFeeding(userFeeding);
  stats.todayAmount = getTodayFeeding(userFeeding);

  return stats;
});

const User = mongoose.model("User", userSchema);

module.exports = User;
