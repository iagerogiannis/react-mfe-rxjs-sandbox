<template>
  <div id="main-app-vue">
    <h1>Main App (Vue)</h1>
    <ContainerReactApp v-if="countReactStore" v-bind:countStore="countReactStore" />
    <div class="handlers">
      <button v-on:click="reactDecrement">-1</button>
      <button v-on:click="reactIncrement">+1</button>
    </div>
    <ContainerVueApp v-if="countVueStore" v-bind:countStore="countVueStore" />
    <div class="handlers">
      <button v-on:click="vueDecrement">-1</button>
      <button v-on:click="vueIncrement">+1</button>
    </div>
  </div>
</template>

<script>
import ContainerReactApp from './components/ContainerReactApp.vue';
import ContainerVueApp from './components/ContainerVueApp.vue';
import createCountContext from 'containerReact/countStore';

export default {
  name: 'containerVue',
  components: {
    ContainerReactApp,
    ContainerVueApp
  },
  data() {
    return {
      countReactStore: null,
      countVueStore: null
    };
  },
  methods: {
    reactIncrement: () => null,
    reactDecrement: () => null,
    vueIncrement: () => null,
    vueDecrement: () => null,
  },
  mounted() {
    this.countReactStore = createCountContext().countStore;
    this.reactIncrement = this.countReactStore.increment;
    this.reactDecrement = this.countReactStore.decrement;

    this.countVueStore = createCountContext().countStore;
    this.vueIncrement = this.countVueStore.increment;
    this.vueDecrement = this.countVueStore.decrement;
  },
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