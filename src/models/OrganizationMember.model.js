import mongoose from "mongoose";

const organizationMemberSchema = new mongoose.Schema(
  {
    organizationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
      required: true,
      index: true
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    role: {
      type: String,
      enum: ["OWNER", "ADMIN", "DEVELOPER", "VIEWER"],
      required: true
    }
  },
  { timestamps: true }
);

organizationMemberSchema.index(
  { organizationId: 1, userId: 1 },
  { unique: true }
);

export default mongoose.model("OrganizationMember", organizationMemberSchema);
