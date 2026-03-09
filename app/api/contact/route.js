import nodemailer from "nodemailer"

export async function POST(req){

try{

const body = await req.json()

const {name,email,phone,message} = body

const transporter = nodemailer.createTransport({

service:"gmail",

auth:{
user:"tejaswidesigns99@gmail.com",
pass:"pfmf livx smrb oxit"
}

})

const mailOptions = {

from:"tejaswidesigns99@gmail.com",

to:"tejaswidesigns99@gmail.com",

subject:"New Contact Form Submission",

text:`
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message || "Not provided"}
`

}

await transporter.sendMail(mailOptions)

return Response.json({success:true})

}catch(error){

return Response.json({success:false})

}

}