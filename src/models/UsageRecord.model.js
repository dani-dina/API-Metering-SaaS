import mongoose from "mongoose";

// aggregated & billing-safe
const usageRecordSchema = new mongoose.Schema(
  {
    organizationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
      required: true,
      index: true
    },
    apiKeyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ApiKey",
      required: true
    },
    period: {
      type: String, // YYYY-MM
      required: true,
      index: true
    },
    requestCount: {
      type: Number,
      default: 0
    },
    errorCount: {
      type: Number,
      default: 0
    },
    dataTransferredMB: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

usageRecordSchema.index(
  { organizationId: 1, apiKeyId: 1, period: 1 },
  { unique: true }
);

export default mongoose.model("UsageRecord", usageRecordSchema);
