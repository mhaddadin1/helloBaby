const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const { Schema } = mongoose;

// const feedingSchema = require("./Feeding");
const Feeding = require("./Feeding");
const Change = require("./Change");
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

    changes: [Change.schema],
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
  // total average;
  function getTotalFeeding(feedings) {
    let total = 0;
    feedings.map((feeding) => (total += feeding.amount));
    let avg = total / feedings.length;
    return avg.toFixed(2);
  }
  // weekly
  // function getWeeklyFeeding(feedings) {
  //   let thisWeek = new Date().toISOString().slice(0, 10);
  //   let weeklyFeedings = feedings.filter(
  //     (feeding) => feeding.createdAt.toISOString().slice(0, 10) === thisWeek
  //   );

  //   let total = 0;
  //   weeklyFeedings.map((feeding) => (total += feeding.amount));
  //   return total;
  // }
  // today

  // current day feeding
  function getTodayFeeding(feedings) {
    let today = new Date().toISOString().slice(0, 10);

    let todaysfeeding = feedings.filter(
      (feeding) => feeding.createdAt.toISOString().slice(0, 10) === today
    );

    let total = 0;
    todaysfeeding.map((feeding) => (total += feeding.amount));
    return total;
  }

  stats.totalAmount = getTotalFeeding(userFeeding);
  // stats.weeklyAmount = getWeeklyFeeding(userFeeding);
  stats.todayAmount = getTodayFeeding(userFeeding);

  return stats;
});

// change stats
userSchema.virtual("change_stats").get(function () {
  let stats = {};
  let userChange = this.changes;
  // total average;
  function getTotalChange(changes) {
    let total = 0;
    changes.map((change) => (total += change.amount));
    let avg = total / changes.length;
    return avg.toFixed(2);
  }
  // weekly
  // function getWeeklyChange(changes) {
  //   let thisWeek = new Date().toISOString().slice(0, 10);
  //   let weeklyChange = changes.filter(
  //     (change) => change.createdAt.toISOString().slice(0, 10) === thisWeek
  //   );

  //   let total = 0;
  //   weeklyChange.map((change) => (total += change.amount));
  //   return total;
  // }
  // today

  // current day change
  function getTodayChange(changes) {
    let today = new Date().toISOString().slice(0, 10);

    let todayschange = changes.filter(
      (change) => change.createdAt.toISOString().slice(0, 10) === today
    );

    let total = 0;
    todayschange.map((change) => (total += change.amount));
    return total;
  }

  stats.totalAmount = getTotalChange(userChange);

  stats.todayAmount = getTodayChange(userChange);

  return stats;
});

const User = mongoose.model("User", userSchema);

module.exports = User;
