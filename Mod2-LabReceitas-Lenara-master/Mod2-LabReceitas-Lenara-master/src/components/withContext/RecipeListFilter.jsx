import { useState } from 'react';
import { useRecipeContext } from "../../contexts/RecipeContext";
import RecipeItem from "./RecipeItem";

const RecipeListFilter = () => {
  const { recipes } = useRecipeContext();

  const [filter, setFilter] = useState('');
  let recipeValue = ''

  const handleFilterButton = () => {
    setFilter(recipeValue);
  };

  const handleFilters = (e) => {
    recipeValue = e.target.value
  };

  return (
    <div className='recipes'>
      <h2>Receitas Cadastradas</h2>
      <div className='recipe-list'>
        <label><input name='filter' type='radio' value=' ' onChange={handleFilters} /> <b>Todas</b></label><br />
        <label><input name='filter' type='radio' value='gluten' onChange={handleFilters} /> <b>Sem glúten</b></label><br />
        <label><input name='filter' type='radio' value='lactose' onChange={handleFilters} /> <b>Sem derivados de leite</b></label><br />
      </div>
      <button type='button' onClick={handleFilterButton} title='Filtrar receitas'>Filtrar</button>
      <br />
      {recipes.length === 0 ? (
        <p>Você não cadastrou nenhuma receita.</p>
      ) : (
        recipes
          .filter((recipe) => {
            if (filter === 'gluten') {
              return recipe.restrictionGluten === true;
            } else if (filter === 'lactose') {
              return recipe.restrictionLactose === true;
            } else if (filter === ' ') {
              return recipes
            }
            return recipes
          })
          .map((recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe} />
          ))
      )}
    </div>
  );
};;

export default RecipeListFilter;
