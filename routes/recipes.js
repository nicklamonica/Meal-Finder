const router = require('express').Router();
const Recipe = require('../models/Recipe');
const middleware = require('../middleware');
const keys = require('../config/keys');
const axios = require('axios');

//get all recipes GET
//private
router.get('/', middleware, async (req, res) => {
    try {
        //get all the recipies that match the user id and sort by most recent date
        const recipes = await Recipe.find({ user: req.user.id }).sort({ date: -1 });
        res.json(recipes);
    } catch (e) {
        console.error(e.message);
        res.status(500).send('Server Error');
    }
});

//create a new recipe to save in database POST
//private
router.post('/', middleware, async (req, res) => {
    try {
        console.log(req.body.body)
        //get full meal based on key sent in req body
        const mealId = req.body.body.mealId
        //gen query string
        const queryString = `https://api.spoonacular.com/recipes/${mealId}/information?includeNutrition=false&apiKey=${keys.foodAPIKey}`;
        const fullMeal = await axios.get(queryString);
        if (fullMeal.data.status === 404) {
            return res.json({ "error": "Recipe not found" });
        }
        //generate list of ingredients
        const ingredients = fullMeal.data.extendedIngredients.map(ingredient => ingredient.original);

        const newRecipe = new Recipe({
            user: req.user.id,
            name: fullMeal.data.title,
            link: fullMeal.data.sourceUrl,
            ingredients,
            imageUrl: fullMeal.data.image
        });
        const recipe = await newRecipe.save();
        res.json(recipe);
    } catch (e) {
        console.error(e.message);
        res.status(500).send('Server Error');
    }
});

//delete a recipe DELETE
//private
router.delete('/:id', middleware, async (req, res) => {

    try {
        var recipe = await Recipe.findById(req.params.id);
        //check to see if recipe exists 
        if (!recipe) {
            return res.status(404).json({ msg: 'recipe not found' });
        }
        //make sure current user is allowed to delete
        if (recipe.user.toString() != req.user.id) {
            return res.status(401).json({ msg: 'not authorized' });
        }
        recipe = await Recipe.findByIdAndDelete(req.params.id);

        res.json(recipe);
    } catch (e) {
        console.error(e.message);
        res.status(500).send('Server Error');
    }
});

//get recipies based on input ingredients POST
router.post('/api', async (req, res) => {

    try {
        //get the recipes by their
        console.log(req.body.body);
        const ingredients = req.body.body.searchParams
        let requestString =
            'https://api.spoonacular.com/recipes/findByIngredients?ingredients=';

        const ingredientString = ingredients.join(',+')
        requestString = requestString + ingredientString + '&number=8' + `&apiKey=${keys.foodAPIKey}`;
        const result = await axios.get(requestString);
        res.json(result.data);
    } catch (e) {
        console.error(e.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;