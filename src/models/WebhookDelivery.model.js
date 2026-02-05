import mongoose from "mongoose";

const webhookDeliverySchema = new mongoose.Schema(
  {
    webhookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "WebhookEndpoint",
      required: true
    },
    eventType: {
      type: String,
      required: true
    },
    payload: {
      type: Object,
      required: true
    },
    status: {
      type: String,
      enum: ["SUCCESS", "FAILED"],
      required: true
    },
    responseCode: Number,
    attemptedAt: {
      type: Date,
      default: Date.now
    }
  }
);

export default mongoose.model("WebhookDelivery", webhookDeliverySchema);
