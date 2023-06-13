
const mongoose = require("mongoose")

const express = require("express")

// const Jobrouter = require("./routes/Jobs.js")
// Jobrouter
const port = process.env.PORT_NUMBER || 3001
const app = express();
// const cros = require("cros")
app.use(express.json());
// app.use(cros())

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


// console.log(Jobrouter)
// app.use("/jobs", Jobrouter);