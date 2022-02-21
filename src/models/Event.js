import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    // field: { type: String, required: true },
    // presentors: [{ name: { type: String, required: true } }],
    // time: { type: Date, required: true },
    // messages: [
    //   {
    //     userId: {
    //       type: mongoose.Schema.Types.ObjectId,
    //       required: true,
    //       ref: "User",
    //     },
    //     message: { type: String, required: true },
    //   },
    // ],
    // youtubeLink: { type: String, required: true },
    isOpenChat: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);
module.exports = mongoose.models.Event || mongoose.model("Event", EventSchema);
