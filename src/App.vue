<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vue from 'vue'



Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



export default {
  name: 'App',
  components: {
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700&display=swap');
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #fff;
}

</style>
