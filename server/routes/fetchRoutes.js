import express from "express";
import Workout from "../models/workout.js";

const router = express.Router()

router.get('/last', async (req, res) => {

    const date = new Date().toISOString()
    const fetchedData = await Workout.find({ Date: { $lte: date } }).sort({ Date: -1 }).limit(1)

    // console.log(fetchedData)
    res.json(fetchedData)
})

router.get('/week', async (req, res) => {

    const date = new Date().toISOString()
    const fetchedData = await Workout.find({ Date: { $lte: date } }).sort({ Date: -1 }).limit(6)

    // console.log(fetchedData)
    res.json(fetchedData)
})

export default router