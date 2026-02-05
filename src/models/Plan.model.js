import mongoose from "mongoose";

const planSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    monthlyQuota: {
      type: Number,
      required: true
    },
    rateLimitPerSecond: {
      type: Number,
      required: true
    },
    priceCents: {
      type: Number,
      required: true
    },
    isPayAsYouGo: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

export default mongoose.model("Plan", planSchema);
