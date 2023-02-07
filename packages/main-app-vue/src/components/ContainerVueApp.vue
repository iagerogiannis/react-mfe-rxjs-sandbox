<template>
  <div ref="ref"></div>
</template>

<script>
import { mount } from 'containerVue/ContainerVueApp';

export default {
  name: 'containerVueApp',
  props: ['countStore'],
  mounted() {
    mount(this.$refs.ref, { countStore: this.countStore });
  }
}
</script>
