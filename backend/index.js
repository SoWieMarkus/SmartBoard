const express = require("express");
require('dotenv').config();
const app = express();
const port = 1108;
const axios = require("axios");

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

app.get("/weather", (request, response) => {
    response.set("Access-Control-Allow-Origin", "*");
    axios("https://api.openweathermap.org/data/2.5/weather?q=Dresden,01277&units=metric&appid=" + WEATHER_API_KEY)
        .then(result => response.send(result.data));
});

app.listen(port, () => {
    console.log("Backend started. Listening on localhost:1108")
})