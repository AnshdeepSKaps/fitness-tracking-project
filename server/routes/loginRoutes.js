import express from "express";
import User from "../models/user.js";
import jwt from "jsonwebtoken"

const router = express.Router()

router.post('', async (req, res) => {

    // // Website you wish to allow to connect
    // res.setHeader('Access-Control-Allow-Origin', 'https://dapper-capybara-688970.netlify.app');

    // // Request methods you wish to allow
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // // Request headers you wish to allow
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type', 'Content-Type');

    // // Set to true if you need the website to include cookies in the requests sent
    // // to the API (e.g. in case you use sessions)
    // res.setHeader('Access-Control-Allow-Credentials', true);

    const username = req.body.username
    const password = req.body.password

    const user = await User.findOne({ Username: username, Password: password })

    // console.log(user)

    if (user) {
        const email = user.Email
        const token = jwt.sign({ email: email, username: username, }, process.env.MY_KEY)

        res.cookie("access_token", token, {
            httpOnly: true,
            secure: process.env.SECURE,
            maxAge: 5 * 60 * 1000
        })

        res.send({ status: "ok" })
    }
    else
        res.json({ status: "invalid" })


})

router.post('/reg', async (req, res) => {

    const data = req.body

    const insertionData = {
        Username: data.username,
        Password: data.password,
        Email: data.email,
        Age: data.age,
        Contact: data.contact
    }

    const document = new User(insertionData)
    document.save(err => {
        if (err) console.log(err)
        else
            console.log("Saved!")
    })
})


export default router