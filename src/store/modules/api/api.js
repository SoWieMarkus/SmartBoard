const state = () => {
    departureMonitor : {

    }
}

const mutations = {

    saveDepartureMonitor(state, {id, result}) {
        state.departureMonitor[id] = result;
    }

}

const actions = {

    loadDeparture({commit}, {id}) {
        console.log("Loading departure monitor for: " + id);

        fetch("https://webapi.vvo-online.de/dm?format=json&stopid=${id}&limit=20")
            .then(result => result.json())
            .then(result => {
                commit("saveDepartureMonitor", {id: id, result: result});
            })
    }


}