<template>
  <div id="departureMonitor">
    <departure-monitor-container title="Schneebergstraße" stopId="33000819"></departure-monitor-container>
    <departure-monitor-container title="Zwinglistraße" stopId="33000084"></departure-monitor-container>
  </div>
</template>

<script>

import DepartureMonitorContainer from "@/components/departure/DepartureMonitorContainer";

export default {
  name: "DepartureMonitor",
  components: {
    DepartureMonitorContainer,
  },
}
</script>

<style scoped>
#departureMonitor {
  float: left;
  background: #1f1f1f;
  width: 25%;
  min-height: 100%;
  height: 100%;
  color: #fcba03;
}
</style>