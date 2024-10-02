import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, min: 3 },
    lastName: { type: String, required: true, min: 3 },
    email: { type: String, required: true, unique: true },
    secondaryEmail: { type: String },
    username: { type: String, required: true, min: 3, unique: true },
    phoneNumber: { type: String, required: true, min: 10, max: 11 },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true, max: 6 },
    profilePicture: { type: String, default: '' }, // S3 URL
  },

  { timestamps: true },
);

export const User = mongoose.model("User", userSchema);
