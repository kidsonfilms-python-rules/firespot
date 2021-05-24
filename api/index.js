const express = require('express')
const app = express()

const getFires = require('./utils/api')
 
app.get('/api', async function (req, res) {
    const fires = await getFires('SACRAMENTO')
    console.log(fires.features)
  res.send(fires.features)
})
 
app.listen(3000)
console.log('Listening on Port 3000')