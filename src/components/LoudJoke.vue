<template>
<!-- refer to normal joke for notes all three components for the joke style text buttons are the same. -->
  <section id="loud">
    <button @click="loadJoke">LOUD</button>
    <p>{{ jokeData }}</p>
    </section>
</template>

<script>
export default {
  name: "loud-joke",
  data() {
    return {
      jokeData: "",
    };
  },
  methods: {
    loadJoke: function () {
      this.jokeData = this.$store.getters.loudJokeGet;
    },
  },
};
</script>

<style scoped>
</style>