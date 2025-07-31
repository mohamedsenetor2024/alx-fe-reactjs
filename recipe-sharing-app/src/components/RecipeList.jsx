import React from 'react';
import { useRecipeStore } from './recipeStore';
import RecipeCard from './RecipeCard';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  if (!recipes || recipes.length === 0) {
    return <p>No recipes available.</p>;
  }



  return (
    <div>
      <h2>All Recipes</h2>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
