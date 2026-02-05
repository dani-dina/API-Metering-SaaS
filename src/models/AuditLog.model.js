import mongoose from "mongoose";

const auditLogSchema = new mongoose.Schema(
  {
    organizationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
      required: true
    },
    actorUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null
    },
    action: {
      type: String,
      required: true
    },
    resource: {
      type: String,
      required: true
    },
    metadata: {
      type: Object,
      default: {}
    },
    ipAddress: String
  },
  { timestamps: true }
);

export default mongoose.model("AuditLog", auditLogSchema);
