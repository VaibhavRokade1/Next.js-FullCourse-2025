import { resend } from "@/lib/reSend";
import { ApiReponce } from "@/types/ApiResponce";
import VerificationEmail from "../../Emails/VerificationEmail";

export async function sendVerificationCode(
  email: string,
  username: string,
  otp: string,
): Promise<ApiReponce> {
  try {
    const { data, error } = await resend.emails.send({
      from: " <sendy.io>",
      to: email,
      subject: "Mistry Message Verification Code",
      react: VerificationEmail({ username, otp }),
    });

    return {
      success: true,
      message: "verification email send verification successfully...",
    };
  } catch (error) {
    console.log("Send Verification code : ", error);
    return { success: false, message: "failed to send verification email..." };
  }
}
