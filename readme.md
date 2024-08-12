# Movie Search App

## Overview

The Movie Search App is a modern web application built with React that allows users to search for movies and view detailed information about them. It leverages The Movie Database (TMDb) API to fetch movie data and display it in an intuitive and user-friendly interface. This application demonstrates various React concepts including state management, routing, and API integration.

## Features

- **Search for Movies:** Users can search for movies by title using a dynamic search form.
- **Movie Details:** View detailed information about each movie including title, poster, release date, rating, and an overview.
- **Responsive Design:** The application is designed to be responsive and accessible on various devices.
- **Error Handling:** Informative error messages are displayed when something goes wrong, ensuring a smooth user experience.
- **Routing:** Implemented with React Router to navigate between different views such as the home page, movie list, and movie detail pages.

## Installation and Setup

To get started with the Movie Search App, follow these steps:

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/yourusername/movie-search-app.git
    ```

2. **Navigate into the Project Directory:**

    ```bash
    cd movie-search-app
    ```

3. **Install Dependencies:**

    Ensure you have Node.js installed. Then, install the project dependencies using npm:

    ```bash
    npm install
    ```

4. **Configure Environment Variables:**

    Create a `.env` file in the root directory of the project and add your TMDb API key:

    ```plaintext
    REACT_APP_TMDB_API_KEY=your_api_key_here
    ```

    Replace `your_api_key_here` with your actual TMDb API key. You can obtain this API key by creating an account on [The Movie Database](https://www.themoviedb.org/) and generating an API key.

5. **Start the Development Server:**

    Run the following command to start the development server:

    ```bash
    npm start
    ```

    This will start the application and you can view it in your browser at:

    ```
    http://localhost:3000
    ```

## Project Structure

Here’s an overview of the project structure:

- **public/index.html:** The main HTML file where the React application is rendered.
- **src/api.js:** Contains functions for interacting with The Movie Database API.
- **src/components/:** Directory for reusable components such as `MovieCard`, `Search`, `Sidebar`, and `ErrorBoundary`.
- **src/pages/:** Directory for page components like `Home`, `MovieDetail`, and `MovieListPage`.
- **src/utils/:** Utility functions for formatting data, such as date and number formatting.
- **src/App.js:** The main application component where routing is configured.
- **src/index.js:** The entry point of the React application.
- **src/styles.css:** Global styles applied across the application.

## API Integration

The application uses The Movie Database (TMDb) API to fetch movie data. Key API endpoints used are:

- **Search Movies:** `https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=QUERY`
- **Movie Details:** `https://api.themoviedb.org/3/movie/MOVIE_ID?api_key=YOUR_API_KEY`

Replace `YOUR_API_KEY` with the actual API key and `QUERY` or `MOVIE_ID` with the appropriate values.



### Deployment with Vercel

1. **Create a Vercel Account:** Sign up or log in to Vercel.
2. **Import Your Project:** Click on "New Project" and select your GitHub repository.
3. **Configure Settings:** Ensure the build command is `npm run build` and the output directory is `build`.
4. **Deploy:** Click "Deploy" to launch your project.



## Acknowledgements

- [React](https://reactjs.org/): JavaScript library for building user interfaces.
- [The Movie Database (TMDb)](https://www.themoviedb.org/): API used for fetching movie data.
- [Vercel](https://vercel.com/): Alternative service for deployment.


