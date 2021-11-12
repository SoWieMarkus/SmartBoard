<template>
  <div id="departureMonitorContent">
    <span>{{ title }}</span>
    <div style="overflow: auto; height: 95%;">
      <template v-for="departure in departures">
        <departure-monitor-container-content v-bind:key="departure.id" :departure="departure"></departure-monitor-container-content>
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
    departures(){
      console.log(this.$store.getters["getDepartures"])
      return this.$store.getters["getDepartures"][this.stopId]["Departures"];
    }
  },
  components: {
    DepartureMonitorContainerContent,
  },
  methods: {
    loadDeparture() {
      console.log("Loading departure monitor for: " + this.stopId);

      fetch("https://webapi.vvo-online.de/dm?format=json&stopid=" + this.stopId + "&limit=20")
          .then(result => result.json())
          .then(result => {
            console.log(result);
            this.$store.state.departureMonitor[this.stopId] = result;
          })
    },
  },
  mounted() {
    this.loadDeparture();
    this.departures();
  }
}
</script>

<style scoped>
#departureMonitorContent {
  min-height: 50%;
  height: 50%;
}

</style>