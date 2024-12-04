// import { Schema, model, models } from 'mongoose'

// const postSchema = new Schema({
//   msg: {
//     type: String,
//     required: true
//   }

// }, { timestamps: true })


// const PostModel = models.post || model('post', postSchema)

// export default PostModel;
import { Schema, model, models } from 'mongoose';

// Define schema for favorites
const favoriteSchema = new Schema(
  {
    recipeId: {
      type: String, // The ID of the recipe being favorited
      required: true,
    },
    recipeName: {
      type: String, // The name of the recipe
      required: true,
    },
    recipeImage: {
      type: String, // The image URL of the recipe
    },
  },
  { timestamps: true }
);

// Export model
const FavoriteModel = models.favorite || model('favorite', favoriteSchema);

export default FavoriteModel;
