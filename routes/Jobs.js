
const express = require("express");
const { JObModel } = require("../models/Job.js");

const Jobrouter = express.Router();


Jobrouter.post("/", (req, res) => {
    try {

        const person = new JObModel(req.body);
        person.save();
        res.send({ person })

    } catch (error) {
        res.send({ "errr": "worng now" })
    }
})


Jobrouter.get("/", (req, res) => {
    try {

        const person = JObModel.find();

        res.send(person)

    } catch (error) {
        res.send({ "errr": "worng now" })
    }
})

module.export = Jobrouter
