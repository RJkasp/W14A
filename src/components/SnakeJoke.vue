<template>
<!-- refer to normal joke for notes all three components for the joke style text buttons are the same. -->
  <section id="snake">
    <button @click="snakeJoke">Snake</button>
    <p>{{ jokeData }}</p>
  </section>
</template>

<script>
export default {
  name: "snake-joke",
  data() {
    return {
      jokeData: "",
    };
  },
  methods: {
    snakeJoke: function () {
      this.jokeData = this.$store.getters.snakeJokeGet;
    },
  },
};
</script>

<style scoped>
</style>