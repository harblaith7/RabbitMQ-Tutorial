const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("NOTIFCATIONS API")
})

app.listen(8001, () => {
  console.log("Listening on PORT 8001");
});