<template>
  <div ref="ref"></div>
</template>

<script>
import { mount } from 'counterVue/CounterVueApp';

export default {
  name: 'counterVueApp',
  props: ['countStore'],
  mounted() {
    mount(this.$refs.ref, { countStore: this.countStore });
  }
}
</script>
