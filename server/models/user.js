import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    Username: String,
    Password: String,
    Email: String,
    Age: Number,
    Contact: String
})

const User = mongoose.model('User', userSchema)

export default User