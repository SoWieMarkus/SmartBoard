<template>
  <div style="height: auto;margin-top:10px;">
    <span id="mode" @click="lol()">{{ departure.LineName }}</span><span>{{ departure.Direction }}</span>
  </div>
</template>

<script>
export default {
  name: "DepartureMonitorContainerContent",
  props: {
    departure: Object,
  },
  methods:{
    lol(){
      console.log(this.departure);
    }
  }
}
</script>

<style scoped>
*{
  font-size: large;
}

#mode {
  background: #2c3e50;
  border-radius: 10px;
  padding: 5px;

}

</style>