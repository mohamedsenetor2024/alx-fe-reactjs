import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    

    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* Recipe Detail Page */}
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/add-recipe" element={<AddRecipeForm />} />
    
        </Routes>
        <Link
  to="/add-recipe"
  className="inline-block mt-4 text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
>
  ➕ Add Recipe
</Link>
      </div>
    </Router>
  );
}

export default App;

