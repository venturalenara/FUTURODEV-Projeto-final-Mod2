import { useState, useEffect } from "react";
import { useRecipeContext } from "../../contexts/RecipeContext";
import { ModalAdicionar } from ".";

const RecipeForm = () => {
  const { addRecipe, selectedRecipe, updateRecipe, selectRecipe, recipes } = useRecipeContext();

  const [formValues, setFormValues] = useState({
    title: "",
    ingredients: "",
    preparation: "",
    restrictionLactose: "",
    restrictionGluten: "",
  });

  useEffect(() => {
    if (selectedRecipe) {
      setFormValues({
        title: selectedRecipe.title,
        ingredients: selectedRecipe.ingredients,
        preparation: selectedRecipe.preparation,
        restrictionLactose: selectedRecipe.restrictionLactose,
        restrictionGluten: selectedRecipe.restrictionGluten,
      });
    }
  }, [selectedRecipe]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedRecipe) {
      updateRecipe(selectedRecipe.id, {
        ...selectedRecipe,
        title: formValues.title,
        ingredients: formValues.ingredients,
        preparation: formValues.preparation,
        restrictionLactose: formValues.restrictionLactose,
        restrictionGluten: formValues.restrictionGluten,
      });
      selectRecipe(null);
    } else {
      addRecipe({
        id: Date.now(),
        title: formValues.title,
        ingredients: formValues.ingredients,
        preparation: formValues.preparation,
        restrictionLactose: formValues.restrictionLactose,
        restrictionGluten: formValues.restrictionGluten,
      });
    }

    setFormValues({
      title: "",
      ingredients: "",
      preparation: "",
      restrictionLactose: "",
      restrictionGluten: ""
    });
  };

  return (
    <>
      {/* <ModalAdicionar> */}
        <div className="add-recipe">
          <form onSubmit={handleSubmit}>
            <label> Nome
              <br />
              <input
                type="text"
                value={formValues.title}
                onChange={(e) =>
                  setFormValues({ ...formValues, title: e.target.value })
                }
              /></label>
            <label> Ingredientes
              <br />
              <textarea
                value={formValues.ingredients}
                onChange={(e) =>
                  setFormValues({ ...formValues, ingredients: e.target.value })
                }
              /></label>
            <label> Modo de Preparo
              <br />
              <textarea
                value={formValues.preparation}
                onChange={(e) =>
                  setFormValues({ ...formValues, preparation: e.target.value })
                }
              /></label>
              <label>Restrições:</label>
            <label>Lactose
              <input
                name="lactose"
                type="checkbox"
                checked={formValues.restrictionLactose}
                onChange={(e) =>
                  setFormValues({ ...formValues, restrictionLactose: e.target.checked })
                }
              />
            </label>
            <label>Glúten
              <input
                name="gluten"
                type="checkbox"
                checked={formValues.restrictionGluten}
                onChange={(e) =>
                  setFormValues({ ...formValues, restrictionGluten: e.target.checked })
                }
              />
            </label>
            <button type="submit" data-bs-dismiss="modal">
              {selectedRecipe ? "Alterar" : "Adicionar"}
            </button>
          </form>
        </div>
      {/* </ModalAdicionar> */}
    </>)
}

export default RecipeForm;
