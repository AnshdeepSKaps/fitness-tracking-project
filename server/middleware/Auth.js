import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

const authorization = (req, res, next) => {

    // console.log(req.cookies)

    if (!req.cookies) {
        // console.log("no token 1")
        return res.json({ status: "invalid" })
    }

    const token = req.cookies.access_token
    if (!token) {
        // console.log("no token 2")
        return res.json({ status: "invalid" })
    }

    try {
        const decoded = jwt.verify(token, process.env.MY_KEY)
        req.username = decoded.username
        req.email = decoded.email
        return next()
    }
    catch (err) {
        console.log("Middleware auth error")
    }

}

export default authorization



