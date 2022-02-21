import mongoose from "mongoose";

const PresentorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  //   secret: { type: Object, required: true },
  //   temp_token: { type: String, required: true },
});
module.exports =
  mongoose.models.Presentor || mongoose.model("Presentor", PresentorSchema);
