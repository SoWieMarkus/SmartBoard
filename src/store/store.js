import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        departureMonitor: {
            "33000819":{},
            "33000084":{}
        },
        weather: {

        }
    },
    mutations: {
        updateDepartures(state, data) {
            this.state.departureMonitor[data.stopId] = data.result;
        },
        updateWeather(state, data) {
            this.state.weather = data;
        }
    },
    getters: {
        getDepartures: (state) => {
            return state.departureMonitor;
        },
        getWeather: (state) => {
            return state.weather;
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
        loadWeather({commit}){
            fetch("https://api.openweathermap.org/data/2.5/weather?q=Dresden,01277&units=metric&appid=2400f20216f0b21c68542ce58429ed51")
                .then(result => result.json())
                .then(result => {
                    console.log(result);
                    commit("updateWeather", result);
                })
        }
    }
})

