<template>
  <div>
    <div class="ui two column grid">
      <div class="centered column">
        <form class="ui form">
          <div class="item">
            <label>Search Your Meals</label>
            <input v-model="search" type="text" name="search" placeholder="Search By Name" />
          </div>
        </form>
      </div>
    </div>
    <div class="ui container center aligned" v-if="filteredMeals.length==0">
      <br />
      <br />Seems You don't have any saved meals...
      <router-link to="/new">Click here</router-link>to find some.
    </div>
    <div class="card-list">
      <div v-for="(meal,index) in filteredMeals" :key="index" class="six wide column">
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
              <button class="ui button primary">More info</button>
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
import { router } from "../../main.js";

export default {
  name: "MealList",
  data() {
    return {
      savedMeals: [],
      search: "",
      alerts: ""
    };
  },
  async created() {
    try {
      const response = await axios.get("/recipes", {
        headers: {
          "x-auth-token": window.localStorage.getItem("token")
        }
      });
      this.savedMeals = response.data;
    } catch (error) {
      if (error.response) {
        this.alerts = error.response.data;
        router.push("/login");
        return;
      }
    }
  },
  methods: {
    async deleteMeal(id) {
      //delete the meal,
      await axios.delete(`/recipes/${id}`, {
        headers: {
          "x-auth-token": window.localStorage.getItem("token")
        }
      });
      //filter from list
      this.savedMeals = this.savedMeals.filter(meal => meal._id != id);
    }
  },
  computed: {
    filteredMeals: function() {
      return this.savedMeals.filter(meal => {
        return meal.name.toLowerCase().match(this.search.toLowerCase());
      });
    }
  }
};
</script>

<style scoped>
.card-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 20px;
  align-items: center;
  justify-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
}
.card-indv {
  max-width: 100%;
  position: relative;
}
.card-indv .delete {
  position: absolute;
  right: 5px;
  bottom: 14px;
  cursor: pointer;
  color: red;
}
</style>