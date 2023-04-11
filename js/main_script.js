const endpoint = "http://localhost:8000/api/v1/titles/";
const best_movies_filter = '?sort_by=-imdb_score'
const number_of_category_images  = 7
const page_size_filter = '&page_size='+ number_of_category_images
const category_filter_root = '&genre_contains='
const categories = ['biography', 'comedy', 'history']

// Script fetching best movie data
function displayBestRatedMovie(best_movies_filter) {
  // Fetch best movie(= highest imdb) main data
  fetch(endpoint + best_movies_filter)
    .then(response => response.json())
    .then(data => {
      // Get the best movie url and id
      let best_movie_url = data.results[0].url;
      let best_movie_id = data.results[0].id;
      // Fetch the best movie data
      fetch(best_movie_url)
      .then(response => response.json())
      .then(data => {
         // Add best movie information
         let best_movie_title = document.getElementById("bestRatedMovie_title");
         best_movie_title.innerText = data.title;

         let best_movie_description = document.getElementById("bestRatedMovie_description");
         best_movie_description.innerText = data.description;

         let best_movie_img = document.getElementById("bestRatedMovie_img");
         best_movie_img.innerHTML = "<img align='right' width='182' height='280' src='"+data.image_url+"'>";
         best_movie_img.classList.add("open-modal-btn");

          // Open modal and its attributes when button clicked
         best_movie_img.addEventListener("click", function () {
		 createModal(best_movie_id);})
      })
     })
    .catch(error => console.error(error));
}

//Script fetching and displaying movies of a given category
function displayMovieCarousel(category_filter, section_id) {

    const carousel_section = document.getElementById(section_id);

    const carousel_container_div = document.createElement('div');
    carousel_section.appendChild(carousel_container_div);
    carousel_container_div.classList.add("carousel-container");

    const left_arrow_button = document.createElement('button');
    carousel_container_div.appendChild(left_arrow_button);
    left_arrow_button.classList.add("left-arrow");
    left_arrow_button.innerText = "<";

    const carousel_inner_div = document.createElement('div');
    carousel_container_div.appendChild(carousel_inner_div);
    carousel_inner_div.classList.add("carousel-inner");

    const carousel_movies_div = document.createElement('div');
    carousel_inner_div.appendChild(carousel_movies_div);
    carousel_movies_div.classList.add("carousel-movies");

    const right_arrow_button = document.createElement('button');
    carousel_container_div.appendChild(right_arrow_button);
    right_arrow_button.classList.add("right-arrow");
    right_arrow_button.innerText = ">";

    fetch(endpoint + category_filter)
      .then(response => response.json())
      .then(data => {
        const movies = data.results;

        // Add each image tag inside a div element
        movies.forEach((movie, index) => {
          const image = movie.image_url;
          const id = movie.id;

          const img_div = document.createElement('div');
          const img = document.createElement('img');
          img.src = image;
          img_div.appendChild(img);
          carousel_movies_div.appendChild(img_div);
          img_div.classList.add("carousel-movie");
          img_div.setAttribute("img-index", index);

          // Add a click event listener to each image to open a modal
		  img_div.addEventListener("click", function () {createModal(id) })
          })
      })
      .catch(error => console.error(error));
}

// main script populating the website data
function buildWebsite(){

    // 1 - Fetch and display Best Movie information
    displayBestRatedMovie(best_movies_filter)

     // 2 - Fetch and display Top movies of all categories in a carousel
    displayMovieCarousel(best_movies_filter + page_size_filter, 'topRatedMoviesSection')

    // 3 - Fetch and display Top movies for each of the three optional categories in a carousel
    for (let i = 0; i < categories.length; i++)  {
        let category_filter = best_movies_filter + page_size_filter + category_filter_root + categories[i]
        let section_id = categories[i] + 'MoviesSection'
        displayMovieCarousel(category_filter, section_id)
    }
}

buildWebsite()
