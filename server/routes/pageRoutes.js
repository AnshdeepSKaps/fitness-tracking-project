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

// "headers": {
//     "Access-Control-Allow-Origin": "https://dapper-capybara-688970.netlify.app",
//         "Access-Control-Allow-Credentials": "true",
//             "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
//                 "Access-Control-Allow-Headers": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
// }

// "headers": [
//     {
//       "source": "/(.*)",
//       "headers": [
//         { "key": "Access-Control-Allow-Credentials", "value": "true" },
//         { "key": "Access-Control-Allow-Origin", "value": "https://dapper-capybara-688970.netlify.app" },
//         { "key": "Access-Control-Allow-Methods", "value": "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
//         { "key": "Access-Control-Allow-Headers", "value": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" }
//       ]
//     }
//   ]


export default router