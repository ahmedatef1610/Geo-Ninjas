<template>
  <div class="app">
    <Navbar></Navbar>
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/layout/Navbar";
export default {
  data() {
    return {};
  },
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
  background-color: #ddd;
}
</style>
