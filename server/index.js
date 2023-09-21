import express from 'express'
import session from 'express-session'
import ViteExpress from 'vite-express'
import dotenv from 'dotenv'
dotenv.config()
const {PORT, SECRET} = process.env

// Controller imports
import legendsCtrl from './controllers/legendsCtrl.js'
const {getAllLegends, getRandomLegend} = legendsCtrl

const app = express()

app.use(express.json())
// app.use(cors())
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 48
    }
}))


app.get('/api/legends', getAllLegends)
app.get('/api/randomLegend', getRandomLegend)




ViteExpress.listen(app, PORT, () => console.log(`Take us to warp ${PORT}`))