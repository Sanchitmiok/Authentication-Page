import User from "@/models/user.model";
import bcryptjs from "bcryptjs";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType == "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        $set: {
          verifyToken: hashedToken,
          verifyTokenExpiry: Date.now() + 3600000,
        },
      });
    } else if (emailType == "RESET") {
      await User.findByIdAndUpdate(userId, {
        $set: {
          forgotPasswordToken: hashedToken,
          forgotPasswordTokenExpiry: Date.now() + 3600000,
        },
      });
    }

    const msg = {
      to: email,
      from: "mishrasanchit00@gmail.com", // SendGrid par verify kiya hua sender
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">Here</a> to ${
        emailType == "VERIFY" ? "Verify your email" : "Reset your password"
      } or copy and paste the link below in your browser<br>
      ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
      <p/>`,
    };

    const mailResponse = await sgMail.send(msg);
    console.log("Email sent successfully:", mailResponse);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
