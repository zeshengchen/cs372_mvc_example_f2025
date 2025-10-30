// grab our dependencies
import express from 'express'
import router from './app/routes.js'
import expressEjsLayouts from 'express-ejs-layouts'
import path from 'path'
import { fileURLToPath } from 'url'
import mongoose from 'mongoose'

// configure our application
mongoose.connect('mongodb://localhost:27017/cs372-posts')
    .then(() => console.log('DB connected!'))
    .catch(() => {
        console.log('Cannot connect to MongoDB!')
        process.exit(1)
    })

const app = express()
const port = process.env.PORT || 8080

const __filename = fileURLToPath(import.meta.url) // get the resolved path to the file
const __dirname = path.dirname(__filename) // get the name of the directory

// tell express where to look for static assets
app.use(express.static(__dirname + '/public'))

// set ejs as our templating engine 
app.set('view engine', 'ejs')
app.use(expressEjsLayouts)

// set the routes
app.use(router)

// start our server
app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
})
