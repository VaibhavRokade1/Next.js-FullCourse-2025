import z from "zod";

const usernamevalidation = z
  .string()
  .min(5, "Username must be contain < 5 characters")
  .max(20, "Username can contain > 20 characters")
  .trim();

export const signUpSchema = z.object({
  userName: usernamevalidation,
  email: z
    .string("Email is required")
    .email("Please enter a valid email address")
    .trim()
    .min(5, "Email is too short")
    .max(254, "Email is too long"),

  password: z
    .string()
    .trim()
    .min(8, { message: "Password must be at least 8 Characters" })
    .max(12, { message: "Password can not be contains < 12  Characters" }),
});
