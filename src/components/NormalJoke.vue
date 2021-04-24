<template>
  <section id="normal">
      <!-- button that displays joke when chosen -->
    <button @click="normalJoke">Normal</button>
    <!-- mustacshe syntax stores joke inside a ptag -->
    <p>{{ jokeData }}</p>
    
  </section>
</template>

<script>
export default {
  name: "normal-joke",
  // data stores inside it and sends to the p tag than grabs it from the data and places it in the mustache syntax
  data() {
    return {
      jokeData: "",
    };
  },
  // gets joke out of store and places into data.
  methods: {
    normalJoke: function () {
      this.jokeData = this.$store.getters.normalJokeGet;
    },
  },
};
</script>

<style scoped>
</style>