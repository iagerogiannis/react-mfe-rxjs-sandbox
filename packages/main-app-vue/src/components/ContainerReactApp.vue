<template>
  <div ref="ref"></div>
</template>

<script>
import { mount } from 'containerReact/ContainerReactApp';

export default {
  name: 'containerReactApp',
  props: ['countStore'],
  mounted() {
    mount(this.$refs.ref, { countStore: this.countStore });
  }
}
</script>
