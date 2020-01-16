<template>
  <div :class="$style.root">{{ $store.getters.foo }} <button @click="clickHandler">+</button></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    async clickHandler() {
      try {
        const v = this.$store.getters.foo + 1;
        await this.$store.dispatch('setFoo', v);
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style lang="scss" module>
.root {
  position: fixed;
  right: 10px;
  top: 10px;
  z-index: 10000;
  background: red;
  color: #000;
  padding: 10px;
}
</style>
