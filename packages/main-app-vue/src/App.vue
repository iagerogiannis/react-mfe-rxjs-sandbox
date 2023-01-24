<template>
  <div id="main-app-vue">
    <h1>Main App (Vue)</h1>
    <ContainerReactApp />
    <ContainerVueApp />
    <div class="handlers">
      <button v-on:click="decrement">-1</button>
      <button v-on:click="increment">+1</button>
    </div>
  </div>
</template>

<script>
import ContainerReactApp from './components/ContainerReactApp.vue';
import ContainerVueApp from './components/ContainerVueApp.vue';
import countStore from 'containerReact/countStore';

export default {
  name: 'containerVue',
  components: {
    ContainerReactApp,
    ContainerVueApp
  },
  methods: {
    increment: () => countStore.increment(),
    decrement: () => countStore.decrement(),
  }
}
</script>

<style>
#main-app-vue {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border: 4px solid #2c3e50;
}

.handlers button {
  width: 5rem;
  padding: 0.5rem 3rem;
  margin: 2rem;
}
</style>