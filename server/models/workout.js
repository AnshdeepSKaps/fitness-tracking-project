import mongoose from "mongoose"

const workoutSchema = mongoose.Schema({
    Date: Date,
    Exercises: [{ type: String }],
    Sets: [{type: Number}],
    Reps: [{ type: Number }],
    Weights: [{ type: Number }],
    Remarks: [{ type: String }],
})

const Workout = mongoose.model('Workout', workoutSchema)

export default Workout