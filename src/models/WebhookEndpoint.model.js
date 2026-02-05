import mongoose from "mongoose";

const webhookEndpointSchema = new mongoose.Schema(
  {
    organizationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
      required: true
    },
    url: {
      type: String,
      required: true
    },
    secret: {
      type: String,
      required: true
    },
    events: {
      type: [String],
      required: true
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("WebhookEndpoint", webhookEndpointSchema);
