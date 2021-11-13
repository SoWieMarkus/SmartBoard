<template>
  <div style="height: auto; width: 96%;margin: 3%;">
    <span class="line">{{ departure.LineName }} </span><span class="direction">{{ formatLineName() }}</span>
    <span class="time">{{ getRealDepartureTime() }}</span>
  </div>
</template>

<script>
export default {
  name: "DepartureMonitorContainerContent",
  props: {
    departure: Object,
  }, methods: {
    getRealDepartureTime() {
      let milliseconds = this.departure.RealTime.match("\\/Date\\((\\d*)(\\+|\\-)(\\d{2})(\\d{2})\\)\\/");
      let millisecondsUntilDeparture = milliseconds[1] - new Date();
      return Math.round(((millisecondsUntilDeparture % 86400000) % 3600000) / 60000); // minutes
    },
    formatLineName() {
      let lineName = this.departure.Direction;
      lineName = lineName.toUpperCase();
      lineName = lineName.replace("Ö", "OE");
      lineName = lineName.replace("Ü", "UE");
      lineName = lineName.replace("Ä", "AE");
      return lineName;
    }
  }
}
</script>

<style scoped>
* {
  font-size: large;
  font-family: "DVB", serif;
}

.direction {
  overflow: hidden;
  width: 70%;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.time {
  float: right;
  text-align: right;
  width: 15%;

}

.line {
  float: left;
  width: 15%;
}

</style>