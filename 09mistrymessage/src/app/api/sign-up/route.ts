import dbConnect from "@/lib/dbConnect";
import UserModels from "@/models/User";
import { sendVerificationCode } from "@/helpers/sendVerificationCode";

export async function POST(req: Request) {
  await dbConnect();
  try {
    const { username, email, password } = await req.json();
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
