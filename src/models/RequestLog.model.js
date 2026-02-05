import mongoose from "mongoose";

const requestLogSchema = new mongoose.Schema(
  {
    organizationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
      required: true
    },
    apiKeyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ApiKey"
    },
    endpoint: String,
    method: String,
    statusCode: Number,
    ipAddress: String,
    userAgent: String
  },
  { timestamps: true }
);

export default mongoose.model("RequestLog", requestLogSchema);
