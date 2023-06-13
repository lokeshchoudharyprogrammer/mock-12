
const mongoose = require("mongoose")

const express = require("express")

const port = process.env.PORT_NUMBER || 3001
const app = express();
// const cors=require("cors")
app.use(express.json());
// app.use(cors())

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>")
})

app.listen(3400, () => {
    try {

        mongoose.connect("mongodb+srv://lokesh:lokeshcz@cluster0.dsoakmx.mongodb.net/fullstackapp?retryWrites=true&w=majority")
        console.log("Connected Now")
    } catch (error) {
        console.log("Error")
    }
    console.log("server Start")
})