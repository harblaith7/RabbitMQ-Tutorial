const express = require("express")
const app = express()

app.get('/', async (req, res) => {
    res.send("ORDERS API")
})

app.listen(8000, () => {
    console.log("ORDERS API listening on port 8000")
})