import express from "express";
import User from "../models/user.js";
import authorization from "../middleware/Auth.js"

const router = express.Router()

router.get("", authorization, async (req, res) => {
    const user = await User.findOne({ username: req.username, email: req.email })

    if (!user) {
        res.json({ status: "invalid" })
    }
    else {
        res.json({ status: "ok" })
    }
})



export default router