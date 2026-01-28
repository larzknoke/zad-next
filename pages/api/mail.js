import path from "path";
import { TransactionalEmailsApi, SendSmtpEmail } from "@getbrevo/brevo";

const emailAPI = new TransactionalEmailsApi();
emailAPI.authentications.apiKey.apiKey = process.env.BREVO_API_KEY;

export default async function handler(req, res) {
  const body = JSON.parse(req.body);
  console.log("body", body);

  const SECRET_KEY = process.env.RECAPTCHA_SECRETKEY;
  const recaptchaResponse = body["frc-captcha-solution"];
  console.log("recaptchaResponse", recaptchaResponse);
  const verifyUrl = `https://api.friendlycaptcha.com/api/v1/siteverify`;

  const message = `
    Name: ${body.name || "-"}rn
    Email: ${body.email || "-"}rn
    Nachricht: ${body.nachricht || "-"}rn
    Frage: ${body.frage || "-"}rn
    Telefon: ${body.telefon || "-"}rn
    Uhrzeit: ${body.uhrzeit || "-"}rn
    Herkunft: ${req.headers.referer || "-"}rn
  `;

  try {
    const recaptchaRes = await fetch(verifyUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ solution: recaptchaResponse, secret: SECRET_KEY }),
    });

    const recaptchaJson = await recaptchaRes.json();

    console.log("recaptchaJson", recaptchaJson);

    if (recaptchaJson.success) {
      console.log("success");

      /* LOGGER START*/
      const fsp = require("fs").promises;
      const fileDataPath = path.join(process.cwd(), "/log.txt");
      fsp.appendFile(
        fileDataPath,
        `${new Date()};${req.headers.referer};${body.name};${body.email};${
          body.frage
        }\r\n`,
      );
      /* LOGGER END*/

      const emailMessage = new SendSmtpEmail();
      emailMessage.subject = "Neue Nachricht | ZAD Kontaktformular";
      emailMessage.textContent = message;
      emailMessage.htmlContent = message.replace(/rn/g, "<br>");
      emailMessage.sender = { email: process.env.FORM_EMAIL };
      emailMessage.to = [{ email: process.env.FORM_EMAIL }];

      emailAPI
        .sendTransacEmail(emailMessage)
        .then(() => {
          res.status(200).json({ status: "Ok" });
        })
        .catch((error) => {
          console.log(error);
          res.status(422).json({ status: "Mail Send Error", e: error });
        });
    } else {
      res.status(422).json({ status: "ReCaptcha-Validation not successfull" });
    }
  } catch (e) {
    res.status(400).json(e.error);
  }
}
