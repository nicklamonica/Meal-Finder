<template>
  <div>
    <div class="ui two column grid">
      <div class="centered column">
        <form class="ui form">
          <div class="item">
            <label>Search Your Meals</label>
            <input
              v-model="search"
              type="text"
              name="search"
              placeholder="Search Recipes"
              @keyup="filterMeals"
            />
          </div>
        </form>
      </div>
    </div>
    <div class="ui cards centered card-list">
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
              <button class="ui button">More info</button>
            </a>
            <i @click="deleteMeal(meal._id)" class="trash alternate icon delete"></i>
          </div>
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
      savedMeals: [],
      search: ""
    };
  },
  async created() {
    const response = await axios.get("http://localhost:5000/recipes", {
      headers: {
        "x-auth-token": window.localStorage.getItem("token")
      }
    });
    this.savedMeals = response.data;
  },
  methods: {
    async deleteMeal(id) {
      //delete the meal,
      await axios.delete(`http://localhost:5000/recipes/${id}`, {
        headers: {
          "x-auth-token": window.localStorage.getItem("token")
        }
      });
      //filter from list
      this.savedMeals = this.savedMeals.filter(meal => meal._id != id);
    },
    filterMeals() {
      this.savedMeals = this.savedMeals.filter(meal => {
        return meal.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
      });
    }
  }
};
</script>

<style scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-between;
  height: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 10px;
}
.card-indv {
  margin: 20px 15px;
  padding: 0;
  width: 33vh;
  vertical-align: middle;
  position: relative;
}
.card-indv .delete {
  position: absolute;
  right: 5px;
  bottom: 14px;
  cursor: pointer;
}
</style>