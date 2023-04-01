# OpenClassroom - Python Developer Path

**Project 6:** Develop a User Interface for a Python Web Application

**Student:** Abdoul Baki Seydou

**Date:** 01/02/2023

# Abstract

This project consists of creating for a client, JustStreamIt, a website written in HTML, 
CSS and Vanilla Javascript without any other framework, allowing to visualise featured movie's data.

In meeting the client's requirements:

- The website design corresponds to the mock-up provided in the project brief, and displays five categories:   
the "Best Movie" (with the highest IMDb rating), the seven "Top-Rated Movies", and the seven best movies of three optional categories(Biography, Comedy and History).

- A movie in a category is represented by its cover image.

- Clicking on a featured movie’s image opens a modal window displaying the following information:

    The image of the movie cover,
    Title,
    Full genre,
    Release date,
    MPAA rating,
    IMDb score,
    Director(s),
    List of actors,
    Duration,
    Country of origin,
    Box Office result,
    Movie summary.

# Data
The data is fetched from a local version of a home-made API named OCMovies-API, and available 
on the following code repository: https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR

# Installation
The following commands rely on the knowledge of how to use the terminal (Unix, macOS) or the command line (Windows).

* Download and install OC Movies API from the following repository: 
https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR

* Start the API server.

Refer to the README file in the OCMovies-API-EN-FR repository for the steps to complete the installation 
and launching of the API server.

# Running the application

With the server running from the step above:

 **1 - Get this repository**
   * $ git clone https://github.com/Afudu/P6_OpenClassroom.git

 **2 - Move to the folder**
   * Unix/macOS/Windows: cd P6_OpenClassroom

 **3 - Launch the file**
   * Open the file index.html in your favorite web browser.

Note: The API server must be running to view the fetched data.

# Browser compatibility
The website has been tested on Google Chrome (Version 111.0.5563.147), Mozilla Firefox (Version 111.0.1), 
Microsoft Edge (Version 111.0.1661.54), and renders as expected.
