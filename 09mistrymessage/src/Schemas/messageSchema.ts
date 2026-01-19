import z from "zod";

export const MessageSchema = z.object({
  content: z
    .string()
    .min(10, { message: "message at list grater than 8 character. " })
    .max(300, "message at list less than 300 character. "),
});
