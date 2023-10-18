import { useRecipeContext } from '../../contexts/RecipeContext';
import RecipeForm from './RecipeForm';

const RecipeItem = ({ recipe }) => {
  const { deleteRecipe, selectRecipe, handleRecipeSelect } = useRecipeContext();

  const handleDelete = () => {
    deleteRecipe(recipe.id);
    selectRecipe(null);
  };

  return (
    <div className='recipe-item'>
      <h4> &#10086; {recipe.title}</h4>
      <button onClick={handleDelete} title='Excluir receita'>&#10007;	</button>
        <button  onClick={() => handleRecipeSelect(recipe)} type="button" className="modal-edit" data-bs-toggle="modal" data-bs-target="#editModal" title="Editar receita" >
        &#10069;
            </button>
            <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="editModallLabel">Editar Receita</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                                <RecipeForm/>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  );
};

export default RecipeItem;
