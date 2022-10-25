import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    Date: Date,
    Exercises: [{ type: String }],
    Sets: [{ type: Number }],
    Reps: [{ type: Number }],
    Weights: [{ type: Number }],
    Remarks: [{ type: String }],
})

const User = mongoose.model('User', userSchema)

export default User