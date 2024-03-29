import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  function recipeCreate(newRecipe){
    //adds new recipe
    setRecipes([
      ...recipes,
      newRecipe
    ])
  }
  
  function deleteRecipe(recipeToDelete){
  let filteredRecipes = recipes.filter(recipe => recipe !== recipeToDelete);
  setRecipes(filteredRecipes)
}
  
  return (
    <div className="App">
      <header><h1>Dish Diaries</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate createRecipe={recipeCreate}/>
    </div>
  );
}

export default App;