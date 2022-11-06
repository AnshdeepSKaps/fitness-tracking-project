import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import addRoutes from './routes/addRoutes.js'
import fetchRoutes from './routes/fetchRoutes.js'
import suggestRoutes from './routes/suggestRoutes.js'
import graphRoutes from './routes/graphRoutes.js'
import loginRoutes from './routes/loginRoutes.js'


// import con from './database/sql.cjs'

const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/add', addRoutes)
app.use('/fetch', fetchRoutes)
app.use('/suggest', suggestRoutes)
app.use('/graph', graphRoutes)
app.use('/login', loginRoutes)

app.get('', (req, res) => {
    res.send("Welcome to TrackAps")
})

// con.connection.connect(err => { 
//     if (err) console.log("Error")
//     else
//         console.log("Successful")
// })

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("RUNNING"))

const CONNECTION_URL = "mongodb+srv://Anshdeep:Anshdeep@cluster0.cjyox.mongodb.net/test"
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log("Connected to Atlas"))
    .catch(err => console.log(err.message))