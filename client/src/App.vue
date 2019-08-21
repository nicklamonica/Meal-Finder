<template>
  <div id="app">
    <div class="ui container">
      <Navbar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/layouts/Navbar";

export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>

<style>
</style>
