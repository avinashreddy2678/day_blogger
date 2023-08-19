import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: true,
  },
  favs:[{type:mongoose.Schema.Types.ObjectId,ref:"posts"}],
});
export const UserModal = mongoose.model("user", UserSchema);
