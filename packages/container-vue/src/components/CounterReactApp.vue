<template>
  <div ref="ref"></div>
</template>

<script>
import { mount } from 'counterReact/CounterReactApp';

export default {
  name: 'counterReactApp',
  mounted() {
    mount(this.$refs.ref);
  }
}
</script>
