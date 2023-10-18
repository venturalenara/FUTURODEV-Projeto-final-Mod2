
import { createContext, useContext } from 'react';
import useRecipe from '../hooks/recipes';

const RecipeContext = createContext();

export const useRecipeContext = () => useContext(RecipeContext);

export const RecipeProvider = ({ children }) => {
  const recipeStore = useRecipe();

  return (
    <RecipeContext.Provider value={{
      ...recipeStore,
    }}>
      {children}
    </RecipeContext.Provider>
  );
};
