<template>
  <div class="ui vertical masthead center aligned segment">
    <div class="ui text container">
      <h1 class="ui header">Welcome to Meal Finder</h1>
      <h2>Find Meals Based on Ingredients in your kitchen!</h2>
    </div>
    <router-link to="/login" v-if="!isLoggedIn" class="ui primary button">
      Login
      <i class="right arrow icon"></i>
    </router-link>
    <router-link to="/meals" v-else class="ui primary button">
      Saved Meals
      <i class="right arrow icon"></i>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Landing",
  computed: mapGetters(["isLoggedIn"])
};
</script>

<style scoped>
.container {
  margin-top: 25vh;
}
.button {
  margin-top: 15px;
}
</style>