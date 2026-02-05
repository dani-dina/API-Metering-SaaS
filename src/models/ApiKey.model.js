import mongoose from "mongoose";

const apiKeySchema = new mongoose.Schema(
  {
    organizationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
      required: true,
      index: true
    },
    keyHash: {
      type: String,
      required: true,
      unique: true
    },
    prefix: {
      type: String,
      enum: ["pk_live", "pk_test"],
      required: true
    },
    name: {
      type: String,
      required: true
    },
    scopes: {
      type: [String],
      default: []
    },
    environment: {
      type: String,
      enum: ["dev", "prod"],
      required: true
    },
    isActive: {
      type: Boolean,
      default: true
    },
    lastUsedAt: {
      type: Date
    },
    revokedAt: {
      type: Date,
      default: null
    }
  },
  { timestamps: true }
);

export default mongoose.model("ApiKey", apiKeySchema);
