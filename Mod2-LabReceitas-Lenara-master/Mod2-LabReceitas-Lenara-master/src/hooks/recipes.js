import { useState, useEffect } from 'react';

const useRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const resultado = JSON.parse(localStorage.getItem('recipeList'))
    if (resultado) {
      setRecipes(resultado);
    }
  }, []);


  const selectRecipe = (id) => {
    const selectedRecipe = recipes.find(recipe => recipe.id === id);
    setSelectedRecipe(selectedRecipe);
  };


  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
    localStorage.setItem('recipeList', JSON.stringify([...recipes, recipe]))
  };

  const updateRecipe = (id, updatedRecipe) => {
    const updatedRecipes = recipes.map(recipe => (recipe.id === id ? updatedRecipe : recipe));
    setRecipes(updatedRecipes);
    localStorage.setItem('recipeList', JSON.stringify(recipes.map(recipe => (recipe.id === id ? updatedRecipe : recipe))))

  };

  const deleteRecipe = (id) => {
    const updatedRecipes = recipes.filter(recipe => recipe.id !== id);
    setRecipes(updatedRecipes);
  };

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
};


  return {
    recipes,
    selectedRecipe,
    selectRecipe,
    addRecipe,
    updateRecipe,
    deleteRecipe,
    handleRecipeSelect,
  };
};

export default useRecipe;
