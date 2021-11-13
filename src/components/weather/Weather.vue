
<template>
  <div id="weather">
    <weather-content :data="weather"></weather-content>
  </div>
</template>

<script>
import WeatherContent from "@/components/weather/WeatherContent";

export default {
  name: "Weather",
  props: {
    title: String,
    stopId: String
  },
  computed: {
    weather() {
      return this.$store.getters["getWeather"];
    }
  },
  components: {
    WeatherContent,
  },
  mounted() {
    let store = this.$store;
    store.dispatch('loadWeather')

    this.interval = setInterval(function () {
      store.dispatch('loadWeather')
    }, 60 * 1000 * 20);
  }

}
</script>

<style scoped>
#weather {
  float: right;
  background: black;
  color: white;
  width: 25%;
  min-height: 40%;
  height: 40%
}
</style>