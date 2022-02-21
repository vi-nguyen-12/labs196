import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
});
module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
