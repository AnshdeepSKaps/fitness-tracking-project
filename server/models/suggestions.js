import mongoose from "mongoose";

const suggestionSchema = mongoose.Schema({
    Disease: String,
    Workouts: [String],
    Diet: {
        Breakfast: String,
        Lunch: String,
        Dinner: String
    }
})

const Suggestion = mongoose.model('User', suggestionSchema)

export default Suggestion