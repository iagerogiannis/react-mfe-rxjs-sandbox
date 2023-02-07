<template>
  <div ref="ref"></div>
</template>

<script>
import { mount } from 'counterReact/CounterReactApp';

export default {
  name: 'counterReactApp',
  props: ['countStore'],
  mounted() {
    mount(this.$refs.ref, { countStore: this.countStore });
  }
}
</script>
