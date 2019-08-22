<template>
  <div class="ui link cards centered card-list">
    <div v-for="(meal,index) in savedMeals" :key="index" class="six wide column">
      <div class="ui card card-indv">
        <div class="image">
          <img :src="meal.imageUrl" />
        </div>
        <div class="content">
          <a class="header">{{meal.name}}</a>
          <div class="meta">
            <span class="date">Ingredients needed</span>
          </div>
          <div class="description">
            <ul>
              <li v-for="(ing,i) in meal.ingredients" :key="i">{{ing}}</li>
            </ul>
          </div>
        </div>
        <div class="extra content">
          <a :href="meal.link">
            <button class="ui button">Click for more info</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MealList",
  data() {
    return {
      savedMeals: []
    };
  },
  async created() {
    const response = await axios.get("http://localhost:5000/recipes", {
      headers: {
        "x-auth-token": window.localStorage.getItem("token")
      }
    });
    this.savedMeals = response.data;
  }
};
</script>

<style scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  align-items: top;
  height: 100%;
  margin: 0 -15px;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 10px;
}
.card-indv {
  margin: 20px 15px;
  width: 33vh;
}
</style>