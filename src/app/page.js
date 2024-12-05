'use client'; 
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch recipes from TheMealDB API
    axios
      .get('https://www.themealdb.com/api/json/v1/1/search.php?s=') // Fetch all recipes
      .then((response) => {
        setRecipes(response.data.meals); // Save recipes to state
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading recipes...</p>;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-center mb-6">Recipe Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.idMeal} className="border rounded-lg p-4 shadow hover:shadow-lg transition-all duration-300 ease-in-out">
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-lg font-bold mt-2">{recipe.strMeal}</h2>
            <Link
              href={`/recipe/${recipe.idMeal}`}
              className="text-blue-500 hover:underline mt-4 block text-center"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}



