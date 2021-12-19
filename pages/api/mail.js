const nodemailer = require('nodemailer')

export default async function (req, res) {

  console.log(req.body)

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  })

  const mailData = {
    from: req.body.email,
    to: 'branches.burner@gmail.com',
    subject: `Info request for ${req.body.subject} by ${req.body.fname} ${req.body.lname}`,
    text: req.body.message,
    // html: <div>{req.body.message}</div>
   }

   transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })

  res.status(200)
}