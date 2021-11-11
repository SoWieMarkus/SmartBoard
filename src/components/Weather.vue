<template>
  <div id="weather"><span>{{ title }}</span></div>
</template>

<script>
export default {
  name: "Weather",
  props:{
    title: String
  },
  data: () => {
    return {
      test: "MEGAMOIN"
    }
  },

}
</script>

<style scoped>
#weather {
  float: right;
  background-color: yellow;
  width: 25%;
  min-height: 40%;
  height: 40%
}
</style>