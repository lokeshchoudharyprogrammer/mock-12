
const express = require('express');
const mongoose = require('mongoose');
const app = express()
app.use(express.json());
const cors = require("cors")
app.use(cors())

const jobsRouter = require('./routes/Jobs.js');

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>")
})

app.use('/api/jobs', jobsRouter);

app.use(express.json());
app.listen(3400, () => {
    try {

        mongoose.connect("mongodb+srv://lokesh:lokeshcz@cluster0.dsoakmx.mongodb.net/fullstackapp?retryWrites=true&w=majority")
        console.log("Connected Now")
    } catch (error) {
        console.log("Error")
    }
    console.log("server Start")
})

