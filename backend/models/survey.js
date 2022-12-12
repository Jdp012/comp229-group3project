const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Design survey schema workflow using mongoose
const SurveySchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    survey: {
      type: String,
    },
    rateProduct: {
      type: String,
    },
    feedback: {
      type: String,
    },
  },
  //   TimeStamp for createdat and updatedAt
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Survey", SurveySchema);
