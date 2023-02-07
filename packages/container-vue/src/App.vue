<template>
  <div id="container-vue">
    <h2>Container (Vue)</h2>
    <CounterReactApp v-bind:countStore="countStore" />
    <CounterVueApp v-bind:countStore="countStore" />
  </div>
</template>

<script>
import CounterReactApp from './components/CounterReactApp.vue';
import CounterVueApp from './components/CounterVueApp.vue';

export default {
  name: 'containerVue',
  props: ['countStore'],
  components: {
    CounterReactApp,
    CounterVueApp
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