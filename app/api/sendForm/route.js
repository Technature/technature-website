import nodemailer from "nodemailer"
import { NextResponse } from 'next/server'

export async function POST(request) {

const body=await request.json()


  const message = {
    from: body.from,
    to: process.env.NEXT_PUBLIC_GMAIL_EMAIL_ADDRESS,
    subject:`Contact Message from ${body.firstName} ${body.lastName}`,
    text: body.message,
    html: `<p>${body.message}</p>`,
  };

  let transporter = nodemailer.createTransport({
    host:"mail.technature.gr",
    port:587,

    auth: {
      user: process.env.NEXT_PUBLIC_GMAIL_EMAIL_ADDRESS,
      pass: process.env.NEXT_PUBLIC_GMAIL_APP_PASSWORD,
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      },
  });

 const sended=await transporter.sendMail (message);


 if(!sended) return NextResponse.json("ooook")

 return NextResponse.json("ok")
     
}