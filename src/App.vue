<template>
  <div id="app">
    <Contact />
  </div>
</template>

<script>


import Contact from './components/Contant-us'

export default {
  name: 'App',
  components: {
    Contact,
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
