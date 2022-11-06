import express from "express";
import User from "../models/user.js";
import { LocalStorage } from "node-localstorage";

global.localStorage = new LocalStorage('./scratch');

const router = express.Router()

router.post('', async (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    const result = await User.find({ Username: username, Password: password })

    if (result.length == 1) {
        localStorage.setItem("username", username)
        localStorage.setItem("password", password)
        res.redirect("http://localhost:3000/")
    }
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

router.get('/session', async (req, res) => {

    if (localStorage.getItem("username") == null) {
        const resp = {
            info: "no"
        }
        res.json(resp)
    }
    else {
        const data = {
            info: "yes",    
            username: localStorage.getItem("username")
        }
        res.json(data)
    }
})


export default router