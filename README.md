# Recipe Viewer App

## Project Overview

This is a simple recipe viewer app built with **Next.js**. The app allows users to:

- View a list of recipes fetched from an external API (TheMealDB).
- View detailed information for each recipe, including its ingredients, instructions, and category.
- Mark recipes as "favorites" and store them in a MongoDB database.
- View all saved favorite recipes.

**Note**: This project is still under development. While the backend connectivity and data fetching are fully functional, the frontend (especially the styling) is a work in progress. Tailwind CSS has not been fully configured due to my learning curve with it.

## Features

- **View Recipes**: Displays a list of recipes fetched from the [TheMealDB API](https://www.themealdb.com/).
- **Recipe Details**: Displays detailed information about a selected recipe, including ingredients and instructions.
- **Favorites**: Users can mark recipes as favorites, and these favorites are stored in a MongoDB database.
- **Favorites View**: A separate page displays all the saved favorite recipes.

## Technologies Used

- **Frontend**: 
  - **Next.js** (for server-side rendering and routing)
  - **React** (for component-based UI)
  - **Tailwind CSS** (for styling, but not fully implemented due to lack of experience with it)

- **Backend**:
  - **MongoDB Atlas** (for storing favorite recipes)
  - **Axios** (for making HTTP requests to TheMealDB API)

## Installation and Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/recipe-viewer.git
   
 ## Current Status

- **Backend**: Fully functional, with connectivity to MongoDB for saving and fetching favorite recipes.
- **Frontend**: Basic UI, with Tailwind CSS configured but not fully styled yet. Some layout and responsiveness issues may still exist.
- **To Do**: Finalize styling and make the app fully responsive.

## Future Improvements

- **Improve the UI/UX design and layout**: Enhance the visual appeal and user experience of the app by refining the design and making it more intuitive.
- **Make the app fully responsive on all screen sizes**: Ensure the app looks and works well on various devices, including mobile, tablet, and desktop.
- **Add more features like user authentication and persistent favorites across devices**: Implement user authentication to save personalized favorites and allow users to access their data from any device.

  ## Acknowledgments

- **TheMealDB API** for providing the recipe data.
- **MongoDB Atlas** for hosting the database.
- **Next.js** and **React** for providing a solid foundation for building modern web apps.
