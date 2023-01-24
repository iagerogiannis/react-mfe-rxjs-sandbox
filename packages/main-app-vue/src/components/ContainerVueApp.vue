<template>
  <div ref="ref"></div>
</template>

<script>
import { mount } from 'containerVue/ContainerVueApp';

export default {
  name: 'containerVueApp',
  mounted() {
    mount(this.$refs.ref);
  }
}
</script>
