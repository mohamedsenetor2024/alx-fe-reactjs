// src/components/RecipeCard.jsximport React from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeCard = ({ recipe }) => {
  // 👇 Separate Zustand selectors
  const favoriteIds = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorite = favoriteIds.includes(recipe.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  };

  return (
    <div className="recipe-card">
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
      <button onClick={toggleFavorite}>
        {isFavorite ? '❌ Unfavorite' : '❤️ Favorite'}
      </button>
    </div>
  );
};

export default RecipeCard;
