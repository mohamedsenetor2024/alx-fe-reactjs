import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((error) => console.error("Error loading recipe:", error));
  }, [id]);

  if (!recipe) {
    return (
      <p className="text-center mt-10 text-gray-500">
        Loading recipe...
      </p>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Recipe Title */}
      <h1 className="text-4xl font-bold mb-6 text-center">{recipe.title}</h1>

      {/* Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-80 object-cover rounded-2xl shadow-lg mb-6"
      />

      {/* Ingredients */}
      {recipe.ingredients && (
        <div className="bg-white p-6 rounded-2xl shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Instructions */}
      {recipe.instructions && (
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      )}

      {/* Back Button */}
      <div className="mt-6 text-center">
        <Link
          to="/"
          className="text-blue-600 hover:underline font-medium text-lg"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}