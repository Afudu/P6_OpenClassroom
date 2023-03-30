# OpenClassroom - Python Developer Path

**Project 6:** Develop a User Interface for a Python Web Application

**Student:** Abdoul Baki Seydou

**Date:** 01/02/2023

# Abstract

This project consists of creating a website for JustStreamIt, an organization known for publishing film rating,
a website written in pure HTML, CSS and Vanilla Javascript without any other framework, 
that allows to visualise featured movie's data.

In meeting the client's requirements, the website design corresponds to the mock-up provided in the project brief, 
and displays five parts - the "Best Movie" (with the highest IMDb rating), the seven "Top-Rated Movies", 
and the seven best movies of three optional categories(Biography, Comedy and History).

# Data
The data is fetched from a local API named OCMovies-API, available 
on the following repository: https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR

# Installation
The following commands rely on the knowledge of how to use the terminal (Unix, macOS) or the command line (Windows).

**1 - Get this repository**
  * $ git clone https://github.com/Afudu/P6_OpenClassroom.git

**2 - Move to the folder**
  * Unix/macOS/Windows: cd P6_OpenClassroom

**3 - Create a virtual environment**

  * Unix/macOS: $ python3 -m venv pythonenv
  * Windows: py -m venv pythonenv
  
    * Note: you can create the virtual environment in another folder, then move to that folder to run the command above.
    * Example: in the above command, our virtual environment created is called pythonenv - you can give a different name.

**4 - Activate the virtual environment created**
  * Unix/macOS: $ source pythonenv/bin/activate
  * Windows: pythonenv\Scripts\activate

**5 - Securely upgrade pip**
 * Unix/macOS/Windows: pip install --upgrade pip

**6 - Get the OC Movies API repository**
  * $ git clone https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR.git`

**7 - Move to the ocmovies-api root folder**
 * Unix/macOS/Windows: cd OCMovies-API-EN-FR

**8 - Install the OCMovies-API dependencies**
 * Unix/macOS/Windows: pip install -r requirements.txt

**9 - Create and populate the project database**
 * Unix/macOS/Windows: python manage.py create_db

**10 - Run the server**
 * Unix/macOS/Windows: python manage.py runserver

Note: The Steps 1 - 6 and 8 - 9 are only required for the initial installation.
For subsequent launches of the API, move to the [OCMovies-API-EN-FR] folder (step 7) and run the server (step - 10).

# Browsing the website

* With the server running, go to the root of the [P6_OpenClassroom] folder and then 
launch the file index.html in your favorite web browser.

Note: The API server must be running to view the fetched data.

# Browser compatibility
The website has been tested on Google Chrome, Mozilla Firefox, Microsoft Edge, and renders as expected.
