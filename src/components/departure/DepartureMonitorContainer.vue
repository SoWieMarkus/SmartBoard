<template>
  <div id="departureMonitorContent">
    <span class="title"><strong>{{ title }}</strong></span>
    <div style="overflow: auto; height: 85%; width:96%; margin:2%;background: #1f1f1f">
      <template v-for="departure in departures">
        <departure-monitor-container-content v-bind:key="departure.id"
                                             :departure="departure"></departure-monitor-container-content>
      </template>
    </div>
  </div>

</template>

<script>

import DepartureMonitorContainerContent from "@/components/departure/DepartureMonitorContainerContent";

export default {
  name: "DepartureMonitorContainer",
  props: {
    title: String,
    stopId: String
  },
  computed: {
    departures() {
      //console.log(this.$store.getters["getDepartures"]);
      if (this.$store.getters["getDepartures"][this.stopId] === undefined) return [];
      return this.$store.getters["getDepartures"][this.stopId]["Departures"];
    }
  },
  components: {
    DepartureMonitorContainerContent,
  },
  methods: {},
  mounted() {
    let store = this.$store;
    let argumentsForQuery = {id: this.stopId};
    store.dispatch('loadDepartures', argumentsForQuery)

    this.interval = setInterval(function () {
      console.log("Updated " + new Date());
      store.dispatch('loadDepartures', argumentsForQuery);
    }, 60 * 1000);
  }
}
</script>

<style scoped>
#departureMonitorContent {
  min-height: 50%;
  height: 50%;
  background: #fcba03;
}

.title {
  font-family: "Arial";
  font-size: xx-large;
  color: black
}

</style>