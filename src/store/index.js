import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //places joke in from api 
  state: {
    joke: '',
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    //replaceAll function replaces all spaces with underscores you could get creative with this and do different things like replace letters with other letters
    snakeJokeGet: function (state) {
      return state.joke.replaceAll(' ', '_');
    },
    //toUpperCase function turns all letters capital
    loudJokeGet: function (state) {
      return state.joke.toUpperCase();
    },

    //just returns the state no changes
    normalJokeGet: function (state) {
      return state.joke;
    }
  }
})
