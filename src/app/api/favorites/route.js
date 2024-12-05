import connectDB from '../../config/database';
import FavoriteModel from '../../models/favoriteModel';
export async function POST(req) {
  try {
    await connectDB(); // Connect to MongoDB
    const body = await req.json(); // Parse request body

    // Check if the favorite already exists
    const existingFavorite = await FavoriteModel.findOne({ recipeId: body.recipeId });
    if (existingFavorite) {
      return new Response(
        JSON.stringify({ message: 'Recipe already exists in favorites' }),
        { status: 400 }
      );
    }

    // Save the new favorite
    const newFavorite = new FavoriteModel(body);
    await newFavorite.save();

    return new Response(JSON.stringify(newFavorite), { status: 201 });
  } catch (error) {
    console.error('Error adding favorite:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}


export async function GET() {
  try {
    await connectDB(); // Connect to the database
    const favorites = await FavoriteModel.find(); // Fetch all favorite recipes

    return new Response(JSON.stringify(favorites), { status: 200 });
  } catch (error) {
    console.error('Error fetching favorites:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}


  
