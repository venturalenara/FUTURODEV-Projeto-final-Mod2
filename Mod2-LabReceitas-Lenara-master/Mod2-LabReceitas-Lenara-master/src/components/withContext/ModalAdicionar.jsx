import RecipeForm from './RecipeForm';
const ModalAdicionar = () => {


    return (
        <>
            <button type="button" className="modal-criar" data-bs-toggle="modal" data-bs-target="#exampleModal" title="Adicionar receita" >
                &#10010;
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Adicionar Nova Receita</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <RecipeForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalAdicionar;
