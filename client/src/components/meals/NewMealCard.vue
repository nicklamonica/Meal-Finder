<template>
  <div class="item">
    <div class="image">
      <img v-bind:src="meal.image" />
      <button v-if="!clicked" class="positive ui button" @click="saveMeal">
        <i v-if="!loading" class="large plus icon" />
        <i v-if="loading" class="notched circle large loading icon"></i>
      </button>
      <h4 class="header">{{meal.title}}</h4>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "NewMealCard",
  props: ["meal"],
  data() {
    return {
      loading: false,
      clicked: false
    };
  },
  methods: {
    async saveMeal() {
      //make the loading symbol appear
      this.loading = true;
      //hardcoded auth token for now
      await axios.post("http://localhost:5000/recipes", {
        headers: {
          "x-auth-token": window.localStorage.getItem("token"),
          "Content-type": "application/json"
        },
        body: {
          mealId: this.meal.id
        }
      });
      //make the loading symbol disappear
      this.loading = false;
      //make the button disappear
      this.clicked = true;
    }
  }
};
</script>

<style scoped>
.image {
  max-width: 100%;
  position: relative;
}
.image button {
  position: absolute;
  right: 5px;
  top: 5px;
  padding: 10px 0px 10px 12px;
}
.image .header {
  position: absolute;
  background-color: #eee;
  left: 5%;
  right: 5%;
  bottom: 5%;
  text-align: center;
  padding: 0 5px 0 5px;
}
</style>