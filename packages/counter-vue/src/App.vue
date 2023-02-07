<template>
  <div id="counter-vue">
    <p>Vue Counter: {{ counterState.count }}</p>
  </div>
</template>

<script>

export default {
  name: 'counterVue',
  props: ['countStore'],
  data() {
    return {
      counterState: this.countStore.initialState
    }
  },
  methods: {
    setCounterState(newValue) {
      this.counterState = newValue;
    }
  },
  mounted() {
    this.countStore.subscribe(this.setCounterState);
  }
}
</script>