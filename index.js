const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 3800

app.use(express.json())
app.use(require('./routes'))

mongoose.connect("mongodb+srv://ikotiev:mosremonting06@cluster0.tlczq6f.mongodb.net/OnlineLibrary?retryWrites=true&w=majority")

app.listen(PORT, () => {
    console.log(`${PORT} get started`)
})