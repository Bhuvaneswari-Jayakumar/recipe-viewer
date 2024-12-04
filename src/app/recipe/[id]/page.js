
// 'use client'; // Enable React hooks for client-side interactivity

// import { useState, useEffect } from 'react';

// export default function RecipeDetailsPage({ params }) {
//   const { id } = params;
//   const [recipe, setRecipe] = useState(null); // Store recipe details
//   const [isFavorite, setIsFavorite] = useState(false); // Track favorite state

//   // Fetch recipe details when the page loads
//   useEffect(() => {
//     const fetchRecipe = async () => {
//       const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
//       const data = await response.json();
//       setRecipe(data.meals[0]); // Assuming the response is an array
//     };

//     fetchRecipe();
//   }, [id]);

//   // Handle adding/removing from favorites
//   const handleToggleFavorite = async () => {
//     if (isFavorite) {
//       // Remove from favorites
//       const response = await fetch(`/api/favorites/${id}`, { method: 'DELETE' });
//       if (response.ok) {
//         setIsFavorite(false);
//         alert('Removed from favorites!');
//       } else {
//         alert('Failed to remove favorite.');
//       }
//     } else {
//       // Add to favorites
//       const favoriteData = {
//         recipeId: id,
//         recipeName: recipe.strMeal,
//         recipeImage: recipe.strMealThumb,
//       };

//       const response = await fetch('/api/favorites', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(favoriteData),
//       });

//       if (response.ok) {
//         setIsFavorite(true);
//         alert('Added to favorites!');
//       } else {
//         alert('Failed to add to favorites.');
//       }
//     }
//   };

//   if (!recipe) return <p>Loading...</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">{recipe.strMeal}</h1>
//       <img
//         src={recipe.strMealThumb}
//         alt={recipe.strMeal}
//         className="w-full h-auto rounded-md mb-6"
//       />
      
//       {/* Star Button for marking favorites */}
//       <button
//         onClick={handleToggleFavorite}
//         className={`text-3xl ${isFavorite ? 'text-yellow-500' : 'text-gray-400'} mb-4`}
//       >
//         ★
//       </button>

//       <h2 className="text-lg font-bold mt-4">Category:</h2>
//       <p>{recipe.strCategory}</p>

//       <h2 className="text-lg font-bold mt-4">Instructions:</h2>
//       <p className="text-gray-700">{recipe.strInstructions}</p>

//       <h2 className="text-lg font-bold mt-4">Ingredients:</h2>
//       <ul className="list-disc list-inside">
//         {Object.keys(recipe)
//           .filter((key) => key.startsWith('strIngredient') && recipe[key])
//           .map((key, index) => (
//             <li key={index}>{recipe[key]}</li>
//           ))}
//       </ul>
//     </div>
//   );
// }
'use client'; // Required to use React hooks in a Next.js page
import { useState, useEffect } from 'react';

export default function RecipeDetailsPage({ params }) {
  const { id } = params;
  const [recipe, setRecipe] = useState(null); // Store recipe details
  const [isFavorite, setIsFavorite] = useState(false); // Track favorite state

  // Fetch recipe details when the page loads
  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      setRecipe(data.meals[0]); // Assuming the response is an array
    };

    fetchRecipe();
  }, [id]);

  // Handle adding/removing from favorites
  const handleToggleFavorite = async () => {
    if (isFavorite) {
      // Remove from favorites
      const response = await fetch(`/api/favorites/${id}`, { method: 'DELETE' });
      if (response.ok) {
        setIsFavorite(false);
        alert('Removed from favorites!');
      } else {
        alert('Failed to remove favorite.');
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
        alert('Failed to add to favorites.');
      }
    }
  };

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="p-6">
      {/* Responsive Title and Image */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">{recipe.strMeal}</h1>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-64 sm:h-80 object-cover rounded-md mb-6"
      />

      {/* Star Button for marking favorites */}
      <div className="flex justify-center mb-6">
        <button
          onClick={handleToggleFavorite}
          className={`text-4xl ${isFavorite ? 'text-yellow-500' : 'text-gray-400'} transition-all duration-300 ease-in-out`}
        >
          ★
        </button>
      </div>

      {/* Recipe Details */}
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


