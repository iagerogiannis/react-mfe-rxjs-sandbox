<template>
  <div id="counter-vue">
    <p>Vue Counter: {{ counterState.count }}</p>
  </div>
</template>

<script>
import countStore from 'containerReact/countStore';

export default {
  name: 'counterVue',
  data() {
    return {
      counterState: countStore.initialState
    }
  },
  methods: {
    setCounterState(newValue) {
      this.counterState = newValue;
    }
  },
  mounted() {
    countStore.subscribe(this.setCounterState);
  }
}
</script>