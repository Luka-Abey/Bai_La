const express = require('express')
const express = require('mongoose')


const app = express()
const port = process.env.PORT || 5000

app.use(express.json());

app.listen(port, () => console.log(`Server started on port: ${port}`))