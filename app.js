const express = require("express")
const bodyParser = require("body-parser")
const router = require("./controllers/router")
const alert = require('alert')

const app = express()

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: false}))
app.set("view engine", "ejs")

app.listen(3000, ()=>{
  console.log("server is listening at port 3000...")
  router(app)
})
