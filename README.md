Nimap Movie App

Welcome to the Nimap Movie App project! This is a React application for browsing and exploring movies, built with Create React App. The app provides features such as viewing popular movies, searching for specific movies, viewing details about individual movies including their cast, and more.
<div style="display: flex; flex-wrap: wrap;"> <img width="450px;" src="https://github.com/SidharajYadav/Nimap-movie-app/blob/main/public/firstpage.jpg" alt="Home Page"/> <img width="450px;" src="https://github.com/SidharajYadav/Nimap-movie-app/blob/main/public/single-page.jpg" alt="Single Movie Page"/> <img width="450px;" src="https://github.com/SidharajYadav/Nimap-movie-app/blob/main/public/cast-img.jpg" alt="Movie Cast"/> <img width="450px;" src="https://github.com/SidharajYadav/Nimap-movie-app/blob/main/public/moblieview.jpg" alt="Mobile View"/> <img width="450px;" src="https://github.com/SidharajYadav/Nimap-movie-app/blob/main/public/moblie_single-page.jpg" alt="Mobile Single Page"/> </div>
Features

    Explore Popular Movies: Browse through a list of popular movies displayed on the homepage.
    Search Functionality: Search for movies by name using the search bar.
    Movie Details: Click on a movie to view its details including synopsis, rating, release date, and cast.
    Responsive Design: Works seamlessly on both desktop and mobile devices, offering an optimal user experience.

Getting Started

To get started with the Nimap Movie App, follow these steps:
Prerequisites

Ensure you have the following installed:

    Node.js (v12.x or higher)
    npm

Installation

    Clone the repository:

    bash

git clone https://github.com/SidharajYadav/Nimap-movie-app.git

Navigate into the project directory:

bash

cd Nimap-movie-app

Install the required dependencies:

bash

    npm install

Available Scripts

In the project directory, you can run the following scripts:
npm start

This command runs the app in development mode. Open http://localhost:3000 in your browser to view the app.

The page will automatically reload if you make any edits. You will also see any lint errors in the console.
npm test

Launches the test runner in interactive watch mode.
For more details, see the running tests documentation.
npm run build

Builds the app for production into the build folder. It optimizes the React app for the best performance and includes hashed filenames for cache busting.

Your app will be production-ready after running this command!

For more details, refer to the Create React App deployment documentation.
npm run eject

Note: Ejecting is a one-way operation. Once you eject, you can't revert back!

If you're not satisfied with the build configurations, you can use this command to eject all configuration files. It gives you complete control over the project setup.
Features Breakdown

    Movie List: A clean, responsive list of popular movies fetched from the backend API, displayed as movie cards.
    Search Movies: Users can type in a movie's name and find matching results.
    Single Movie Page: When a user clicks on a movie, they are directed to a dedicated page showing details like cast, rating, description, and more.
    Cast Information: Users can also view the list of actors involved in the movie.
    Responsive Design: The app is fully responsive, with separate layouts optimized for mobile devices.

Folder Structure

The main folders and files are:

plaintext

/public
    index.html - the main HTML file
    movie images
/src
    components/ - reusable components like movie cards
    pages/ - individual page components (e.g., HomePage, MovieDetailPage)
    App.js - main app component
    index.js - entry point of the app

Deployment

To deploy the application:

    Build the production-ready version using the following command:

    bash

    npm run build

    The app will be ready to deploy from the build folder. You can deploy this app to platforms such as Netlify, Vercel, or any other hosting service.

For more information on deployment, check out the Create React App deployment guide.
Learn More

    To learn more about React, visit the React documentation.
    Check out the Create React App documentation for more details on using Create React App.

