import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        departureMonitor: {
            "33000819": {},
            "33000084": {}
        },
        weather: {},
        clock: {},
        spotify: {}
    },
    mutations: {
        updateDepartures(state, data) {
            this.state.departureMonitor[data.stopId] = data.result;
        },
        updateWeather(state, data) {
            this.state.weather = data;
        },
        updateClock() {
            this.state.clock = new Date();
        }
    },
    getters: {
        getDepartures: (state) => {
            return state.departureMonitor;
        },
        getWeather: (state) => {
            return state.weather;
        },
        getClock: (state) => {
            return state.clock;
        }
    },
    actions: {
        loadDepartures({commit}, {id}) {
            fetch("https://webapi.vvo-online.de/dm?format=json&stopid=" + id + "&limit=20")
                .then(result => result.json())
                .then(result => {
                    console.log("Found information for stop: " + id);
                    commit("updateDepartures", {stopId: id, result: result});

                })
        },
        loadWeather({commit}) {
            fetch("http://localhost:1108/weather")
                .then(result => result.json())
                .then(result => {
                    console.log(result);
                    commit("updateWeather", result);
                })
        },
        loadSpotify() {
            let header = {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": ""
                }
            }

            fetch("https://api.spotify.com/v1/me/player/currently-playing?market=ES", header)
                .then(result => result.json())
                .then(result => {
                    console.log(result);
                })
        }


    }
})

