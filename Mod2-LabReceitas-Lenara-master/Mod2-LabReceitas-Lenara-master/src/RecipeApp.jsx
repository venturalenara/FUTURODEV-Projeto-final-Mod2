import {Header, ModalAdicionar,RecipeListFilter } from "./components/withContext";

const RecipeApp = () => {
  return (
    <>
      <Header/>
      <main>
      <ModalAdicionar/>
      <RecipeListFilter/>
      </main>
    </>
  );
};

export default RecipeApp;
