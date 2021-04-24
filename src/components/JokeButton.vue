<template>
<button @click="generateJoke">New Joke</button>
</template>

<script>
import axios from 'axios';
    export default {
        name: "joke-button",
        ////pulls joke from axios API and puts it into the generate joke function then stores the joke in the store inside of state
        methods:{
            generateJoke: function(){
                axios.get('https://geek-jokes.sameerkumar.website/api?format=json')
                //this line of code sends it to the store and places the joke in state
                .then((res)=>{this.$store.state.joke = res.data.joke;
                }).catch((err)=>{
                    console.log(err)
                })
            }
        }

    }
</script>

<style scoped>

</style>