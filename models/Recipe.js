const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
    },
    link: {
        type: String
    },
    ingredients: [String],
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('recipe', RecipeSchema);