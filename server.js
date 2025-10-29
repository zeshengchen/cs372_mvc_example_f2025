// grab our dependencies
import express from 'express'
import router from './app/routes.js'

// configure our application
const app = express()
const port = process.env.PORT || 8080

// set the routes
app.use(router)

// start our server
app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
})
