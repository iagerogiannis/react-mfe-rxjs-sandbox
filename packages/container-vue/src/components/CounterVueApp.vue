<template>
  <div ref="ref"></div>
</template>

<script>
import { mount } from 'counterVue/CounterVueApp';

export default {
  name: 'counterVueApp',
  mounted() {
    mount(this.$refs.ref);
  }
}
</script>
