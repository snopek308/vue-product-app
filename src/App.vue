<template>
  <div id="app">
    <Header />
    <!-- renders view supplied to the router -->
    <router-view class="view"></router-view>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Hello Abby"/> -->
  </div>
</template>

<script>
import Header from './components/shell/Header.vue'

//always use the Import name below in components
export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>

</style>
