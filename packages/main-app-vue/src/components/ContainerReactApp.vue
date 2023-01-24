<template>
  <div ref="ref"></div>
</template>

<script>
import { mount } from 'containerReact/ContainerReactApp';

export default {
  name: 'containerReactApp',
  mounted() {
    mount(this.$refs.ref);
  }
}
</script>
