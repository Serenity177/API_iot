const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const PORT = process.env.PORT || 3000;

const app = express();

dotenv.config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const mongodConnString = `mongodb://127.0.0.1:27017/${process.env.DB_NAME}`;

mongoose.connect(mongodConnString)

mongoose.connection.on("error", function(error){
    console.log(error)
})

mongoose.connection.on("error", function(){
    console.log("Successfully connected to MongoDB database")
})

app.use(require("./rutas/componentes/componente"))

app.listen(PORT, function(){
    console.log(`Server app listening to port ${PORT}`);
})