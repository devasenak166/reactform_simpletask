import express from "express";
import mongoose from "mongoose";
const { Schema } = mongoose;
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    minlength: [10, "phone number must be 10 digits"],
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});
const User = mongoose.model("User", userSchema);
export default User;
