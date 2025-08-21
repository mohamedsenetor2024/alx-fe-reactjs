import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);     

 useEffect(() => {
  fetch("/data.json")
    .then((response) => response.json())
    .then((data) => setRecipes(data))
    .catch((error) => console.error("Error loading recipes:", error));
}, []);

  return (
    <div className="container mx-auto px-4 py-8"> 
      <h1 className="text-3xl font-bold text-center mb-8">
        🍽 Recipe Sharing Platform
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> 
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
           <div className="w-full h-72 overflow-hidden rounded-t-2xl">
  <img
    src={recipe.image}
    alt={recipe.title}
    className="w-full h-full object-cover"
  />
</div>  
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>

              <Link 
                to={`/recipe/${recipe.id}`} 
                className="inline-block mt-4 text-blue-600 hover:underline font-medium"
              >
                View Recipe →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}