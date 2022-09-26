const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.listen(3000, ()=>{
  console.log("server is listening at port 3000...")
})

app.get("/", (req, res)=>{
  res.send("bello, this is the homePage")
})
