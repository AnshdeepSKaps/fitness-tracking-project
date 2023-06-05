import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import cookies from 'cookie-parser'
import bodyParser from 'body-parser'
import addRoutes from './routes/addRoutes.js'
import pageRoutes from './routes/pageRoutes.js'
import graphRoutes from './routes/graphRoutes.js'
import loginRoutes from './routes/loginRoutes.js'
import fetchRoutes from './routes/fetchRoutes.js'
import suggestRoutes from './routes/suggestRoutes.js'

// import con from './database/sql.cjs'

const app = express()

app.use(express.json())

const corsOptions = {
    origin: "https://dapper-capybara-688970.netlify.app",
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
    methods: "GET,POST,OPTIONS"
}

app.use(function (req, res, next) {

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
});

app.use(cors(corsOptions))
app.options('https://dapper-capybara-688970.netlify.app', cors(corsOptions))
app.use(cookies())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/add', addRoutes)
app.use('/fetch', fetchRoutes)
app.use('/suggest', suggestRoutes)
app.use('/graph', graphRoutes)
app.use('/login', loginRoutes)
app.use('/page', pageRoutes)

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