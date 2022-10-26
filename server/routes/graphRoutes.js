import express from "express";
import Workout from "../models/workout.js";
import moment from "moment";

const router = express.Router()


router.post("", async (req, res) => {

    const exercise = req.body.exercise
    const results = await Workout.find({
        Exercises: exercise
    }).sort({ Date: 'asc' })

    const rows = []

    results.forEach(ele => {
        const date = moment(ele.Date).format("yyyy-MM-DD hh:mm:ss").toString()
        const i = ele.Exercises.findIndex((ex) => ex == exercise)
        const dataPoint = [date, ele.Weights[i]]
        rows.push(dataPoint)
    })

    res.json(rows)
})

export default router