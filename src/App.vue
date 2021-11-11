<template>
  <div>
    <departure-monitor></departure-monitor>
    <route></route>
    <weather title="TEST"></weather>
    <notes></notes>
  </div>
</template>

<script>

import DepartureMonitor from "@/components/departure/DepartureMonitor.vue"
import Weather from "@/components/Weather";
import Notes from "@/components/Notes";
import Route from "@/components/Route";

export default {
  name: 'App',
  components: {
    Weather,
    Notes,
    Route,
    DepartureMonitor
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  overflow: hidden;
}

div {
  height: 100%;
  width: 100%;
  background: #F52887;
}
</style>
