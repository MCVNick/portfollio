require('dotenv').config()
const { GMAIL_USER, GMAIL_PASSWORD } = process.env
const express = require('express');
const { json } = require('express')
const nodemailer = require('nodemailer')
const expressStaticGzip = require('express-static-gzip')
const sm = require('sitemap')
const fs = require('fs')

const app = express();
const path = require('path')
const sitemap = sm.createSitemap ({
  hostname: 'https://www.nicholasmcqueen.com',
  cacheTime: 600000,
  urls: [
    { url: '/',  changefreq: 'daily', priority: 1.0 },
    { url: '/Home',  changefreq: 'daily', priority: 0.5 },
    { url: '/About-Me',  changefreq: 'daily',  priority: 0.9 },
    { url: '/Skills',  changefreq: 'daily', priority: 0.6 },
    { url: '/Projects',  changefreq: 'daily', priority: 0.8 },
    { url: '/Contact-Me',  changefreq: 'daily', priority: 0.7 },
    { url: '/blank',  changefreq: 'daily', priority: 0.4 }
  ]
})
app.use(express.static(`${__dirname}/../build`))
app.use(`/build/client`, expressStaticGzip(`/build/client`, {
  enableBrotli: true,
  customCompressions: [{
    encodingName: 'deflate',
    fileExtension: 'zz'
  }],
  orderPreference: ['br', 'gz']
}));
app.use(json())

const port = 4000
const options = {
  key: fs.readFileSync(__dirname + '/nginx-selfsigned.key'),
  cert: fs.readFileSync(__dirname + '/nginx-selfsigned.crt')
}
app.listen(port, console.log('The server is running on port', port))

async function mail(req) {
  let transporter = await nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: `${GMAIL_USER}`,
      pass: `${GMAIL_PASSWORD}`
    }
  });

  const output = `
  <h2>You have someone trying to contact you</h2>
  <h3>Contact Details</h3>
  <p>Name: ${req.body.name}</p>
  <p>Email: ${req.body.from}</p>
  <h3>Message</h3>
  <p> ${req.body.message}</p>
  `

  const mailOptions = {
    from: `${GMAIL_USER}`,
    to: `${GMAIL_USER}`,
    subject: `Portfolio Contact`,
    text: ``,
    html: output
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
app.get('/sitemap.xml', function(req, res) {
  sitemap.toXML( function (err, xml) {
      if (err) {
        return res.status(500).end();
      }
      res.header('Content-Type', 'application/xml');
      res.send( xml );
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'))
})