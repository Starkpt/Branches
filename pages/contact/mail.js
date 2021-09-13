export default function (req, res) {
  const pw = process.env.MAIL_PASS
  console.log(req)
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "imap.gmail.com",
    auth: {
      user: 'branches.burner@gmail.com',
      pass: pw,
    },
    secure:true
  })
  const mailData = {
    from: req.body.email,
    to: 'branches.burner@gmail.com',
    subject: `Info request for ${req.body.subject} by ${req.body.fname} ${req.body.lname}`,
    text: req.body.message,
    html: <div>{req.body.message}</div>
   }

   transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })

  res.status(200)
}