<template>
  <div id="departureMonitor" @click="increment">
    <departure-monitor-container title="Zwinglistraße"></departure-monitor-container>
    <departure-monitor-container title="Schneebergstraße"></departure-monitor-container>


  </div>
</template>

<script>

import DepartureMonitorContainer from "@/components/departure/DepartureMonitorContainer";

export default {
  name: "DepartureMonitor",
  components : {
    DepartureMonitorContainer,
  },
  methods: {
    increment() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    }
  },
  computed: {
    departures(){
      console.log(this.$store.state.departures)
      return this.$store.state.departures;
    }
  }
}
</script>

<style scoped>
#departureMonitor {
  float: left;
  background: red;
  width: 25%;
  min-height: 100%;
  height: 100%
}
</style>