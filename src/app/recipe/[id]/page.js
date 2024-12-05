'use client'; // Enable React hooks in a Next.js page
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RecipeDetailsPage({ params }) {
  const router = useRouter();
  const { id } = params || {}; 
  const [recipe, setRecipe] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  // Fetch recipe details when the page loads
  useEffect(() => {
    if (!id) {
      console.error('Recipe ID is missing!');
      router.push('/'); // Redirect to the homepage if ID is invalid
      return;
    }

    const fetchRecipe = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();
        if (data.meals && data.meals[0]) {
          setRecipe(data.meals[0]);
        } else {
          console.error('Recipe not found!');
          router.push('/'); // Redirect if no recipe is found
        }
      } catch (error) {
        console.error('Error fetching recipe:', error);
        router.push('/'); // Handle API errors by redirecting
      }
    };

    fetchRecipe();
  }, [id, router]);

  // Handle adding/removing from favorites
  const handleToggleFavorite = async () => {
    try {
      if (isFavorite) {
        // Remove from favorites
        const response = await fetch(`/api/favorites/${id}`, { method: 'DELETE' });
        if (response.ok) {
          setIsFavorite(false);
          alert('Removed from favorites!');
        } else {
          const errorData = await response.json();
          alert(`Failed to remove favorite: ${errorData.error}`);
        }
      } else {
        // Add to favorites
        const favoriteData = {
          recipeId: id,
          recipeName: recipe.strMeal,
          recipeImage: recipe.strMealThumb,
        };

        const response = await fetch('/api/favorites', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(favoriteData),
        });

        if (response.ok) {
          setIsFavorite(true);
          alert('Added to favorites!');
        } else {
          const errorData = await response.json();
          alert(`Failed to add favorite:Already added as Favourites!`);
        }
      }
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  if (!recipe) {
    return <p className="text-center mt-4">Loading recipe details...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">{recipe.strMeal}</h1>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-64 sm:h-80 object-cover rounded-md mb-6"
      />

      <div className="flex justify-center mb-6">
        <button
          onClick={handleToggleFavorite}
          className={`text-4xl ${isFavorite ? 'text-yellow-500' : 'text-gray-400'} transition-all duration-300 ease-in-out`}
        >
          ★
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <h2 className="text-lg sm:text-xl font-bold mt-4">Category:</h2>
          <p>{recipe.strCategory}</p>
        </div>

        <div>
          <h2 className="text-lg sm:text-xl font-bold mt-4">Instructions:</h2>
          <p className="text-gray-700">{recipe.strInstructions}</p>
        </div>

        <div>
          <h2 className="text-lg sm:text-xl font-bold mt-4">Ingredients:</h2>
          <ul className="list-disc list-inside">
            {Object.keys(recipe)
              .filter((key) => key.startsWith('strIngredient') && recipe[key])
              .map((key, index) => (
                <li key={index}>{recipe[key]}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}