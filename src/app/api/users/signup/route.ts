import { connect } from "@/dbConfig/dbConfig";
import bcryptjs from "bcryptjs";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/helper/mail.helper";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;
    //validation

    const user = await User.findOne({ email });
    console.log(user);

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }
    const salt = await bcryptjs.genSalt(10);
    console.log("salt", salt);

    const hashedPassword = await bcryptjs.hash(password, salt);
    console.log("Hash-pass", hashedPassword);

    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });
    console.log(newUser);

    const savedUser = await newUser.save();
    console.log(savedUser);

    // send email to user

    await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id });

    return NextResponse.json({
      message: "User register successfully",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    console.error("Error during user signup:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
