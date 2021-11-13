<template>
  <div style="overflow: auto; height: 100%;">
    <img :src="getImage()">
    <span>Sonnenaufgang: {{ getTime(data.sys.sunrise) }}</span><br>
    <span>Sonnenuntergang: {{ getTime(data.sys.sunset) }}</span><br>

    <span>Windgeschwindigkeit: {{ data.wind.speed }}</span><br>
    <span>{{ data.main.temp}}°C</span><br>
    <span>Minimum: {{ data.main.temp_min }}°C</span><br>
    <span>Maximum: {{ data.main.temp_max }}°C</span><br>
    <span>Gefühlt: {{ data.main.feels_like }}°C</span><br>
    <span>Luftfeuchtigkeit{{ data.main.humidity }}%</span><br>
    <span>{{ data.main.pressure }}</span><br>
    <span>Wolkendecke: {{ data.clouds.all }} % </span>
  </div>
</template>

<script>

export default {
  name: "WeatherContent",
  props: {
    data: Object
  },
  methods: {
    getImage() {
      return "http://openweathermap.org/img/wn/" + this.data.weather[0].icon + "@2x.png"
    },
    getTime(value) {
      return new Date(value * 1000).toLocaleTimeString();
    }
  }
}
</script>

<style scoped>

</style>