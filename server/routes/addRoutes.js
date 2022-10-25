import express from 'express'
import Workout from '../models/workout.js'

const router = express.Router()

router.get('/', (req, res) => {
    res.send("Hello and welcome")
})

router.post('/', (req, res) => {
    // res.redirect("http://localhost:3000/add")

    const data = req.body
    // console.log(data)

    const conversionObject = {
        "Jan": "01",
        "Feb": "02",
        "Mar": "03",
        "Apr": "04",
        "May": "05",
        "Jun": "06",
        "Jul": "07",
        "Aug": "08",
        "Sep": "09",
        "Oct": "10",
        "Nov": "11",
        "Dec": "12",
    }
    // console.log(data.date)

    const year = (data.date.split(' ')[3])
    const month = conversionObject[data.date.split(' ')[1]]
    const d = (data.date.split(' ')[2])

    const insertionDate = new Date(`${year}-${month}-${d}T00:00:00`)
    // console.log(insertionDate)
    insertionDate.setHours(insertionDate.getHours() + 5)
    insertionDate.setMinutes(insertionDate.getMinutes() + 30)

    const insertionData = {
        Date: insertionDate.toISOString(),
        Exercises: data.exercises,
        Sets: data.sets.map(e => parseInt(e)),
        Reps: data.reps.map(e => parseInt(e)),
        Weights: data.weights.map(e => parseInt(e)),
        Remarks: data.remarks
    }

    // console.log(insertionData)

    const document = new Workout(insertionData)
    document.save(err => {
        if (err) console.log(err)
        else
            console.log("Saved!")
    })
})

export default router