import React, { useEffect } from 'react'
import { useRecipeStore } from './components/recipeStore'
import SearchBar from './components/SearchBar'
import RecipeList from './components/RecipeList'

const App = () => {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  useEffect(() => {
    // Fetch your recipe data here (replace with actual API or mock)
    const mockRecipes = [
      { id: 1, title: 'Spaghetti Bolognese', prepTime: 30 },
      { id: 2, title: 'Chicken Curry', prepTime: 25 },
      { id: 3, title: 'Avocado Toast', prepTime: 10 },
    ];
    setRecipes(mockRecipes);
  }, []);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Recipe Finder</h1>
      <SearchBar />
      <RecipeList />
    </div>
  );
};

export default App;
