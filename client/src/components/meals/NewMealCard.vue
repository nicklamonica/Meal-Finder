<template>
  <div class="item">
    <div class="image">
      <img v-bind:src="meal.image" />
    </div>
    <div class="content">
      <a class="header">{{meal.title}}</a>
      <div class="meta">
        <span>Description</span>
      </div>
      <div class="description">
        Add this Meal to your account to learn more.
        <br />
        <button class="ui button" @click="saveMeal">Save Meal</button>
      </div>
      <div class="extra">Additional Details</div>
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
      clicked: false
    };
  },
  methods: {
    async saveMeal() {
      this.clicked = true;
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
    }
  }
};
</script>

<style scoped>
.item {
  display: flex;
  margin-top: 10px;
  border: 5px;
}
.image {
  margin-right: 5px;
}
</style>