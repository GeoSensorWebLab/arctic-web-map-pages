const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

let port = process.env.PORT || 5000
let host = process.env.HOST || "127.0.0.1"

app.listen(port, host, () => console.log(`Listening on ${host}:${port}`))
