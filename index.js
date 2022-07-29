import express from "express";
import bodyParser from "body-parser";
import cities from "./Routes/cities.js"
import "./db.js"
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json())

app.use("/cities", cities)

app.listen(PORT, ()=>{
    console.log(`server at Localhost:${PORT}`);
})

