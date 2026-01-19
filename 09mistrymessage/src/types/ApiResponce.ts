import { Message } from "@/models/Message.models";

export interface ApiReponce {
  success: boolean;
  message: string;
  isAcceptingMessage?: boolean;
  messages?: Array<Message>;
}
