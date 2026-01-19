import { Schema, Document } from "mongoose";

// mongoose Schema types (Messages Schema )
export interface Message extends Document {
  content: string;
  createdAt: Date;
}

// mongoose Schema Message
export const MessageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});
