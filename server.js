// grab our dependencies
import express from 'express'

// configure our application
const app = express()
const port = process.env.PORT || 8080

// set the routes
app.get('/', (req, res) => {
    res.send('Hello CS372!')
})

// start our server
app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
})
