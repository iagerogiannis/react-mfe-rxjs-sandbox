<template>
  <div ref="ref" class="counter-vue-app"> </div>
</template>

<script>
import { mount } from 'counterVue/CounterVueApp';

export default {
  name: 'CounterVueApp',
  mounted() {
    mount(this.$refs.ref);
  }
}
</script>
