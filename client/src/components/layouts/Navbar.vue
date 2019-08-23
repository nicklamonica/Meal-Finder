<template>
  <div class="ui menu">
    <router-link to="/" class="item">
      <i class="utensils icon"></i> Meal Finder
    </router-link>
    <div class="right menu">
      <router-link v-if="isLoggedIn" to="/new" class="item">
        <i class="save icon"></i> New Recipe
      </router-link>
      <router-link v-if="isLoggedIn" to="/meals" class="item">
        <i class="plus icon"></i>Saved Recipies
      </router-link>
      <router-link v-if="!isLoggedIn" to="/login" class="item">
        <i class="sign-in icon"></i>Login
      </router-link>
      <router-link v-if="!isLoggedIn" to="/register" class="item">
        <i class="user plus icon"></i>Register
      </router-link>
      <a v-if="isLoggedIn" @click="logout" class="item">
        <i class="sign-out icon"></i>Logout
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Navbar",
  methods: {
    ...mapActions(["logout"]),
    isActive() {
      return false;
    }
  },
  computed: mapGetters(["isLoggedIn"])
};
</script>

<style>
a.item.router-link-exact-active.router-link-active {
  background-color: #eee;
}
</style>