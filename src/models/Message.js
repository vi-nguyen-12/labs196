import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    message: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports =
  mongoose.models.Message || mongoose.model("Message", MessageSchema);
