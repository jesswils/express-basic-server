const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log(req.url)
    res.send('<h1>Hiya!</h1>') // Express determines the content-type and sets that header automatically
})
// Express will call our function when a request for the '/' end point/url is made 

app.get('/old', (req, res) => {
    res.redirect(301, '/new')
})

app.get('/new', (req, res) => {
    res.send('<h2>New</h2>')
})

app.listen(3000, (err) => {
    if (err) console.log(err)
    else console.log("Listening on port 3000!")
})