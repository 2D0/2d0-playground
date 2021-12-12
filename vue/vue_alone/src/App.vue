<template>

  <div v-for="(test, idx) in menu" :key="idx">
    {{test}}
  </div>

</template>

<script>



export default {
  name: 'App',

  data(){
    return{
      menu : ['a','b','c'],
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
