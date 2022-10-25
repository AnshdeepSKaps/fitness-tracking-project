import express from "express";
import Workout from "../models/workout.js";

const router = express.Router()


router.post("", async (req, res) => {

    const exercise = req.body.exercise
    const results = await Workout.find({
        Exercises: exercise
    })

    const data = [
        [
            { type: "date", label: "Day" },
            { type: "number", label: "Value 1" }
        ],
    ]

    results.forEach(ele => {
        const i = ele.Exercises.findIndex((ex) => ex == exercise)
        const dataPoint = [new Date(ele.Date), ele.Weights[i]]
        data.push(dataPoint)
    })

    res.json(data)
})

export default router