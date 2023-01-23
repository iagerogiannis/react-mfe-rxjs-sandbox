<template>
  <div ref="ref" class="counter-react-app"> </div>
</template>

<script>
import { mount } from 'counterReact/CounterReactApp';

export default {
  name: 'CounterReactApp',
  mounted() {
    mount(this.$refs.ref);
  }
}
</script>
