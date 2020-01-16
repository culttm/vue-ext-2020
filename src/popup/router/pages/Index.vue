<template>
  <div>
    <p>Hello world! {{ $store.getters.foo }}</p>
    <button @click="clickHandler">+++</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    async clickHandler() {
      await this.$store.dispatch('setFoo', this.$store.getters.foo + 1);
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  font-size: 20px;
}
</style>
