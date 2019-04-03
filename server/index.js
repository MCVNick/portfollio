require('dotenv').config()
const { GMAIL_USER, GMAIL_PASSWORD } = process.env
const express = require('express');
const { json } = require('express')
const nodemailer = require('nodemailer')

const app = express();
const path = require('path')
app.use(express.static(`${__dirname}/../build`))
app.use(json())

const port = 4000 
app.listen(port, console.log('The server is running on port', port))

async function mail(req) {
  let transporter = await nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: `${GMAIL_USER}`,
      pass: `${GMAIL_PASSWORD}`
    }
  });

  const mailOptions = {
    from: `${req.body.from}`,
    to: `${GMAIL_USER}`,
    subject: `${req.body.name}`,
    text: `${req.body.message}`,
  }

  transporter.sendMail(mailOptions, (err) => {
    if (err) {
      console.log('Error in mail:', err)
    }
  })
}

app.post('/send', (req) => {
  mail(req)
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
  })