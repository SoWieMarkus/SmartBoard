<template>
  <div id="clock">{{ time.toLocaleString() }}</div>
</template>

<script>
export default {
  name: "Clock",
  computed: {
    time() {
      return this.$store.getters["getClock"];
    }
  },
  mounted() {
    let store = this.$store;
    store.commit("updateClock");
    store.dispatch("loadSpotify");
    this.interval = setInterval(function () {
      store.commit("updateClock");
    }, 1000);
  }
}
</script>

<style scoped>
#clock {
  float: left;
  background: black;
  width: 50%;
  min-height: 100%;
  font-size: xx-large;
  color: white;
  font-family: monospace;
}
</style>