const express = require('express');

const app = express();
const path = require('path')
app.use(express.static(`${__dirname}/../build`))

const port = 4000 
app.listen(port, console.log('The server is running on port', port))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
  })