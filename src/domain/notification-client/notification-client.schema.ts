// Define my Schema here
import mongoose from "mongoose";
import { ClientType } from "./interfaces/client.interface";

const clientSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    enum: ClientType,
    required: true,
  },
});
