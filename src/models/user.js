import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: [true, "Email required"],
  },
  password: {
    type: String,
    require: [true, "Password"],
  },
  about: String,
});

export const User =
  mongoose.models.users || mongoose.model("users", userSchema);
