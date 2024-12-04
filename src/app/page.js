// import Image from "next/image";
// import { getPosts } from "../../_actions/postAction";
// export default async function Home() {
//   const res= await getPosts();
//   console.log(res);
//   return (
//     <main>Hello Bhuvana</main>
//   );
// }
'use client'; // Required to use React hooks in a Next.js page
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <div key={recipe.idMeal} className="border rounded-lg p-4 shadow hover:shadow-lg">
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-full h-40 object-cover rounded-md"
          />
          <h2 className="text-lg font-bold mt-2">{recipe.strMeal}</h2>
          <Link
             href={`/recipe/${recipe.idMeal}`}
             className="text-blue-500 hover:underline mt-4 block">
             View Details
          </Link>
        </div>
      ))}
    </div>
  );
}




