<template>
  <div class="ui secondary menu">
    <a class="item">Home</a>
    <div class="right menu">
      <router-link v-if="isLoggedIn" to="/new" class="item">New Recipe</router-link>
      <router-link v-if="isLoggedIn" to="/meals" class="item">Saved Recipies</router-link>
      <router-link v-if="!isLoggedIn" to="/login" class="item">Login</router-link>
      <router-link v-if="!isLoggedIn" to="/register" class="item">Register</router-link>
      <a v-if="isLoggedIn" @click="logout" class="ui item active">Logout</a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Navbar",
  methods: mapActions(["logout"]),
  computed: mapGetters(["isLoggedIn"])
};
</script>

<style>
</style>