'use client'; // Enables React hooks in this page
import { useEffect, useState } from 'react';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await fetch('/api/favorites'); // Fetch favorites from the API
        if (response.ok) {
          const data = await response.json();
          // Remove duplicates based on recipeId
          const uniqueFavorites = Array.from(new Set(data.map(a => a.recipeId)))
            .map(id => data.find(a => a.recipeId === id));
          setFavorites(uniqueFavorites); // Store the unique favorites in state
        } else {
          console.error('Failed to fetch favorites');
        }
      } catch (error) {
        console.error('Error fetching favorites:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  if (loading) return <p>Loading favorites...</p>;
  if (favorites.length === 0) return <p>No favorites yet! Add some recipes to your favorites.</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Your Favorite Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((favorite) => (
          <div key={favorite._id} className="border rounded-lg p-4 shadow hover:shadow-lg">
            <img
              src={favorite.recipeImage}
              alt={favorite.recipeName}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-lg font-bold mt-2">{favorite.recipeName}</h2>
            {/* Display Ingredients */}
            <ul className="list-disc list-inside">
              {favorite.ingredients?.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
