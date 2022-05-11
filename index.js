require('dotenv').config()
const express = require("express")

const app = express()

app.use(express.json())

app.listen(process.env.PORT, () => {
  console.log(`Server Listening on port ${process.env.PORT}...`)
})

app.get('/get-static-files', (req, res) => {
  res.send()
})