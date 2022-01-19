const { Recipes } = require('../models');

const recipeData = [{
    title: '',
    content: '',
    user_id: 1

},
{
    title: '',
    content: '',
    user_id: 2
},
{
    title: '',
    content: '',
    user_id: 3
}
];

const seedRecipes = () => Recipes.bulkCreate(recipeData);

module.exports = seedRecipes;