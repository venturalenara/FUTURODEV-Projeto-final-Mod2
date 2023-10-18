import { useRecipeContext } from "../../contexts/RecipeContext";

const RecipeDetails = () => {
  const { selectedRecipe } = useRecipeContext();

  return (

    <div>
      {selectedRecipe ? (
        <>
          <p>Nome: {selectedRecipe.title}</p>
          <p>Ingredientes: {selectedRecipe.ingredients}</p>
          <p>Modo de Preparo: {selectedRecipe.preparation}</p>
          <label>Lactose
            <input
              name="lactose"
              type="checkbox"
              defaultChecked={selectedRecipe.restrictionLactose}
            />
          </label>
          <br />
          <label>Glúten
            <input
              name="gluten"
              type="checkbox"
              defaultChecked={selectedRecipe.restrictionGluten}
            />
          </label>
        </>
      ) : (
        <p>Selecione uma receita para visualizar os detalhes.</p>
      )}
    </div>

  );
};

export default RecipeDetails;
