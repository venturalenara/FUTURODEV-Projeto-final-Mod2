import { useRecipeContext } from "../../contexts/RecipeContext";
import RecipeItem from "./RecipeItem";

const RecipeList = () => {
  const { recipes } = useRecipeContext();



  return (
    <div className="recipes">
      <h3>Receitas cadastradas</h3>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeItem
            key={recipe.id}
            recipe={recipe}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
