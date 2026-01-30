import dbConnect from "@/lib/dbConnect";
import UserModels from "@/models/User";
import { sendVerificationCode } from "@/helpers/sendVerificationCode";
import VerificationEmail from "../../../../Emails/VerificationEmail";

export async function POST(req: Request) {
  await dbConnect();
  try {
    const { username, email, password } = await req.json();

    const existingUserVerifiedByUsername = await UserModels.findOne({
      username,
      isVerified: true,
    });

    if (existingUserVerifiedByUsername) {
      return (
        Response.json({
          success: false,
          message: "Username Already is Teken",
        }),
        {
          status: 502,
        }
      );
    }

    const existingUserVerifiedByEmail = await UserModels.findOne({ email });
    const verifyCode: string = Math.floor(
      100000 + Math.random() * 900000,
    ).toString();
    if (existingUserVerifiedByEmail) {
    } else {
      const expiryDate = new Date();
      expiryDate.setHours(expiryDate.getHours() + 1);

      const newUser = new UserModels({
        userName: username,
        email,
        password,
        verifyCode,
        verifyCodeExpiry: expiryDate,
        isAcceptingMessages: false,
        messages: [],
      });

      await newUser.save();
    }

    // send Verification code
    const emailResponce = await sendVerificationCode(
      username,
      email,
      verifyCode,
    );

    if (!emailResponce.success) {
      return (
        Response.json({
          success: false,
          message: emailResponce.message,
        }),
        {
          status: 500,
        }
      );
    }

    return (
      Response.json({
        success: true,
        message: "User Regeistered Successfully Please Verify your email",
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log("error While Registering (sign-Up): ", error);
    return Response.json(
      {
        success: false,
        message: "Sign-up User error",
      },
      {
        status: 500,
      },
    );
  }
}
