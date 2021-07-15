<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.$store.dispatch("getUser");
  },
};
</script>

<style>
@import "./assets/style/index.css";
</style>
