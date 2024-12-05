import connectDB from '../../../config/database';
import FavoriteModel from '../../../models/favoriteModel';

export async function DELETE(req, context) {
  const { id } = context.params; 
  try {
    await connectDB();
    const result = await FavoriteModel.findOneAndDelete({ recipeId: id });

    if (!result) {
      return new Response(JSON.stringify({ error: 'Favorite not found' }), { status: 404 });
    }

    return new Response(JSON.stringify({ message: 'Favorite removed successfully' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}


