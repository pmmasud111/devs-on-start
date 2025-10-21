import mongoose, { Schema } from "mongoose";
export interface User {
  user: string;
  name: string;
  password: string;
}

const userSchema = new Schema({
  user: { type: String, required: true, unique: true },
  name: { type: String, required: true, unique: false },
  password: { type: String, required: true },
});

export const userModel =
  mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
