import express from "express";
import User from "../models/user.js";
import authorization from "../middleware/Auth.js"

const router = express.Router()

router.get("", authorization, async (req, res) => {
    const user = await User.findOne({ username: req.username, email: req.email })

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://dapper-capybara-688970.netlify.app');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type', 'Content-Type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
    if (!user) {
        res.json({ status: "invalid" })
    }
    else {
        res.json({ status: "ok" })
    }
})



export default router