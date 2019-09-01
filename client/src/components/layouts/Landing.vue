<template>
  <div class="landing-container">
    <div class="centered-items">
      <h1 class="ui header">Welcome to Meal Finder</h1>
      <h2>Find Meals Based on Ingredients in your kitchen!</h2>
      <router-link to="/login" v-if="!isLoggedIn" class="ui primary button">
        Login
        <i class="right arrow icon"></i>
      </router-link>
      <router-link to="/meals" v-else class="ui primary button">
        Saved Meals
        <i class="right arrow icon"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Landing",
  computed: mapGetters(["isLoggedIn"])
};
</script>

<style>
img {
  width: 100%;
  object-fit: cover;
}

.landing-container {
  position: relative;
  text-align: center;
  height: 90vh;
  background-image: linear-gradient(
      to right bottom,
      rgba(126, 213, 111, 0.7),
      rgba(40, 180, 131, 0.7)
    ),
    url("../../../assets/landing.jpg");
  background-size: cover;
  background-position: top;
  background-attachment: fixed;
}
/* Centered text */
.centered-items {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 15px;
}
.button {
  margin-top: 15px;
}
</style>