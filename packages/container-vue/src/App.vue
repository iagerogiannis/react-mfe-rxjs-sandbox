<template>
  <div id="container-vue">
    <h1>Container (Vue)</h1>
    <CounterReactApp />
  </div>
</template>

<script>
import CounterReactApp from './components/CounterReactApp.vue';

export default {
  name: 'app',
  components: {
    CounterReactApp
  }
}
</script>

<style>
#container-vue {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>