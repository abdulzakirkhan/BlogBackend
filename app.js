require('dotenv').config();

const express = require("express")
const expressLayout=require("express-ejs-layouts")
const app = express()
const port=process.env.PORT



app.use(express.static('public'));
// templating Engine
app.use(expressLayout)
app.set("layout","./layouts/main")
app.set('view engine', 'ejs');

app.use("",require("./server/routes/main"))


app.listen(port, () => {
    console.log(`Connected SuccessFully on ${port}`)
})