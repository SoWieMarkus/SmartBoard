const express = require("express");
const chalk = require('chalk');
require('dotenv').config();
const app = express();
const port = 1108;
const axios = require("axios");

const URL_SPOTIFY_TOKEN = "https://accounts.spotify.com/api/token";

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
let code;
let accessToken;
let refreshToken;
app.get("/weather", (request, response) => {
    response.set("Access-Control-Allow-Origin", "*");
    axios("https://api.openweathermap.org/data/2.5/weather?q=Dresden,01277&units=metric&appid=" + WEATHER_API_KEY)
        .then(result => response.send(result.data));
});

app.get("/authorize", (request, response) => {

    let url = "https://accounts.spotify.com/authorize";
    url += "?client_id=" + SPOTIFY_CLIENT_ID;
    url += "&response_type=code";
    url += "&redirect_uri=" + encodeURI("http://localhost:1108/code");
    url += "&show_dialog=false";
    url += "&scope=user-read-private user-read-currently-playing";
    response.redirect(url);
});

app.get("/code", (request, response) => {
    if (request.query.code !== undefined){
        code = request.query.code;
        data("Received code!")
        response.redirect("/spotify/accesstoken");
        log("Get access token!");
    } else {
        log("Redirect.")
        response.redirect("http://localhost:8080");
    }
})

app.get("/spotify/accesstoken", (request, response) => {
    log("Started authentication ...");
    data(code);

    let headers = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic ' + new Buffer(SPOTIFY_CLIENT_ID + ":" + SPOTIFY_CLIENT_SECRET).toString('base64')
        }
    }


    data(headers);

    const params = 'grant_type=authorization_code&code=' + code
        + '&client_id=' + SPOTIFY_CLIENT_ID
        + '&client_secret=' + SPOTIFY_CLIENT_SECRET
        + '&redirect_uri=' + encodeURI('http://localhost:1108/code');
    data(params);
    axios.post(URL_SPOTIFY_TOKEN, params, headers)
        .then(function (res) {
            response.set(res.data);
            data(res.data);
            accessToken = res.data.access_token;
            response.redirect("http://localhost:8080");
        })
        .catch(function (error) {
            logerror(error);
        });
})

app.get("/spotify", (request, response) => {

    let header = {
        "Accept":"application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + accessToken
    }
    axios.get("https://api.spotify.com/v1/me/player/currently-playing", {headers: header})
        .then(res =>{
            console.log(res);
            response.send(res.data);
        });
});

app.listen(port, () => {
    log("Backend started. Listening on localhost:1108")
})


function getTime() {
    return "[" + chalk.cyanBright(new Date().toLocaleString()) + "]";
}

function logerror(log) {
    console.log(getTime(), chalk.red(log));
    console.log(log);
}

function log(log) {
    console.log(getTime(), chalk.blueBright(log));
}

function data(log) {
    console.log(getTime());
    console.log(log);
}