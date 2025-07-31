// src/components/FavoritesList.jsx
import React from 'react';
import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const favoriteIds = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const favorites = favoriteIds
    .map((id) => recipes.find((r) => r.id === id))
    .filter(Boolean);

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favorites.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => removeFavorite(recipe.id)}>❌ Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
