# Develop a User Interface for a Python Web Application

**OpenClassrooms - Python Developer Path:** Project 6

**Student:** Abdoul Baki Seydou

**Date:** 01/02/2023 

## Table of Contents
1. [Summary](#summary)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Project Tasks](#project-tasks)
5. [Local Development](#local-development)
   - [Prerequisites](#prerequisites)
   - [Setup on macOS/Linux](#setup-on-macoslinux)
   - [Setup on Windows](#setup-on-windows)
   - [Running the Application](#running-the-application)
   - [Screenshots](#screenshots)

## Summary
This project involves building a movie-focused web application for the client, **JustStreamIt**.
The website, developed using HTML, CSS, and Vanilla JavaScript, 
fetches and displays movie data from a locally hosted API [OCMovies-API-EN-FR](https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR).
No external frameworks were used in the development.

## Features
The application showcases movie data categorized into five sections:
1. **Best Movie:** Displays the movie with the highest IMDb rating.
2. **Top-Rated Movies:** Displays the seven Top-rated movies in all categories.
3. **Biography Top-Rated Movies:** Displays the seven Top-rated movies in Biography.
4. **Comedy Top-Rated Movies:** Displays the seven Top-rated movies in Comedy.
5. **History Top-Rated Movies:** Displays the seven Top-rated movies in the History.

**Note:**
   - **Cover image:** Each movie is represented by its cover image.
   - **Modal:** Clicking on a movie’s image opens a modal displaying its details.

## Technologies Used
- **Programming Languages:** Python, Javascript, HTML, CSS.
- **Database:** SQLite.

## Project Tasks
1. **Frontend Development:** Create the application layout based on the provided mock-up.
2. **Backend Integration:** Develop JavaScript files to fetch the data from the API and render it on the weppage.

## Local Development

### Prerequisites
- Python 3.6 or higher.

### Setup on macOS/Linux

1. **Clone the Repository**
   ```bash
   cd /path/to/put/project/in
   git clone https://github.com/Afudu/P6_OpenClassroom.git

2. **Move to the folder**
   ```bash
   cd P6_OpenClassroom

3. **Set Up Virtual Environment**
   ```bash
   python -m venv venv
   
4. **Activate Environment**
   ```bash
   source venv/bin/activate
   
5. **To deactivate Environment**
   ```bash
   deactivate

### Setup on Windows

1. Follow the steps above.

2. To activate the environment:
   ```bash
   venv\Scripts\Activate

### Running the application

1. Fetch the Data Repository:
   ```bash
   git clone https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR.git

2. Move to the Repository and then Start the server:
   ```bash
   cd OCMovies-API-EN-FR && python manage.py runserver
  
3. With the server running, open in your favorite web browser the file ```index.html``` located in the 
```P6_OpenClassroom``` directory.
   ```bash
   index.html

### Screenshots

![Best Movie](screenshots/best_movie.png "Best Movie")


![Top Movies](screenshots/top_movies.png "Top Movies")
