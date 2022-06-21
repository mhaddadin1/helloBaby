const mongoose = require("mongoose");

const { Schema } = mongoose;

const feedingSchema = new Schema({
  amount: {
    type: Number,
    required: true,
    // unique: true,
  },
});

// const Feeding = mongoose.model("Feeding", feedingSchema);

module.exports = feedingSchema;
