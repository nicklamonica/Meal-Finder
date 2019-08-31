<template>
  <div>
    <div class="ui two column grid ingredient-form">
      <div class="centered column">
        <form class="ui form centered" v-on:submit.prevent="genMeals">
          <div v-for="(ingredient, index) in ingredients" :key="index" class="field">
            <label for="ingredient">Ingredient Added:</label>
            <input type="text" name="ingredient" v-model="ingredients[index]" />
            <i class="trash icon delete" @click="deleteIngredient(ingredient)"></i>
          </div>
          <div class="field">
            <label for="add-ingredient">Add an ingredient:</label>
            <input
              type="text"
              name="add-ingredient"
              @keydown.tab.prevent="addIngredient"
              v-model="entered"
            />
            <i class="plus icon add" @click.prevent="addIngredient"></i>
          </div>
          <p v-if="alerts">{{alerts}}</p>
          <button class="ui button">Find new meals</button>
        </form>
      </div>
    </div>
    <div v-if="alerts">{{saveAlerts}}</div>
    <div v-if="generatedMeals.length>0" class="ui items item-wrapper">
      <div v-for="(meal, index) in generatedMeals" v-bind:key="index">
        <NewMealCard v-bind:meal="meal" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NewMealCard from "./NewMealCard";
import { mapGetters } from "vuex";
import { router } from "../../main.js";

export default {
  name: "NewMeal",
  data() {
    return {
      ingredients: [],
      generatedMeals: [],
      alerts: null,
      saveAlerts: null,
      entered: null
    };
  },
  components: {
    NewMealCard
  },
  computed: mapGetters(["isLoggedIn"]),
  created() {
    if (!this.isLoggedIn) {
      router.push("/login");
    }
  },
  methods: {
    async genMeals() {
      try {
        //request generated meals, hardcoded for now
        const meals = await axios.post("/recipes/api", {
          headers: {
            "Content-type": "application/json"
          },
          body: {
            searchParams: this.ingredients
          }
        });
        //set generated meals to to to meals
        this.generatedMeals = meals.data;
        this.ingredients = [];
      } catch (error) {
        this.saveAlerts = "Must be logged in to save a meal";
        return;
      }
    },
    addIngredient() {
      if (this.entered) {
        this.ingredients.push(this.entered);
        this.entered = null;
        this.alerts = null;
      } else {
        this.alerts = "You must enter a value to add an ingredient";
      }
    },
    deleteIngredient(ingredient) {
      this.ingredients = this.ingredients.filter(ing => ing !== ingredient);
    }
  }
};
</script>

<style scoped>
.item-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 20px;
  align-items: center;
  justify-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
}

form {
  padding: 20px;
  width: 55vh;
}
form .field {
  margin: 20px auto;
  position: relative;
}
.ingredient-form .delete {
  position: absolute;
  right: 5px;
  bottom: 14px;
  color: #aaa;
  cursor: pointer;
}
.ingredient-form .add {
  position: absolute;
  right: 5px;
  bottom: 14px;
  color: #aaa;
  cursor: pointer;
}
</style>