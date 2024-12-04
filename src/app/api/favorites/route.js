import connectDB from '../../config/database';
import FavoriteModel from '../../models/favoriteModel';
export async function POST(req) {

  
    try {
        await connectDB();
      const body = await req.json();
      console.log('Received Favorite Data:', body);  // Log the received data
  
      const newFavorite = new FavoriteModel(body);
      await newFavorite.save();  // Save to MongoDB
  
      return new Response(JSON.stringify(newFavorite), { status: 201 });
    } catch (error) {
      console.error('Error saving favorite:', error);  // Log the error
      return new Response(JSON.stringify({ error: error.message }), { status: 400 });
    }
  }
  
