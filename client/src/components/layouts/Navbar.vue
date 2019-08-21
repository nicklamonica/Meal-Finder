<template>
  <div class="ui secondary menu">
    <a class="item">Home</a>
    <div class="right menu">
      <router-link to="/new" class="item">New Recipe</router-link>
      <router-link to="/" class="item">Saved Recipies</router-link>
      <router-link to="login" class="item">Login</router-link>
      <router-link to="Register" class="item">Register</router-link>
      <a class="ui item active">Logout</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style>
</style>