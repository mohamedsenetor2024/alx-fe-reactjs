import { useRecipeStore } from './recipeStore'
import { Link } from 'react-router-dom'
import React from 'react'

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="p-4 border rounded shadow">
            <h3 className="text-xl font-bold">{recipe.title}</h3>
            <p>Prep Time: {recipe.prepTime} mins</p>
            {/* Add more details as needed */}
          </div>
        ))
      ) : (
        <p>No recipes match your search.</p>
      )}
    </div>
  );
};

export default RecipeList;
