import React, { useEffect } from 'react'
import { useRecipeStore } from './components/recipeStore'
import SearchBar from './components/SearchBar'
import RecipeList from './components/RecipeList'
import FavoritesList from './components/FavoritesList'
import RecommendationsList from './components/RecommendationsList'
import RecipeCard from './components/RecipeCard'


const App = () => {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  useEffect(() => {
    // Simulate fetching from an API
    const fetchRecipes = async () => {
      const data = [
        { id: 1, title: 'Pasta', description: 'Creamy pasta recipe' },
        { id: 2, title: 'Salad', description: 'Healthy salad' },
      ];

      // ✅ Set the recipes in Zustand
      setRecipes(data);
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <h1>Recipe Sharing App</h1>

      {/* Other components like <RecipeList /> */}
      <RecipeList />                {/* 👈 Must be here */}
      <FavoritesList />            {/* Optional */}
      <RecommendationsList />      {/* Optional */}
    </div>
  );
};

export default App;


