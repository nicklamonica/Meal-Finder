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
import { mapGetters } from "vuex";

export default {
  name: "app",
  components: {
    Navbar
  },
  actions: mapGetters(["isLoggedIn"])
};
</script>

<style>
</style>
