const ENTRYPOINT = "http://localhost:8000/api/v1/titles/";
const BEST_MOVIES_FILTER = '?sort_by=-imdb_score'
const NUMBER_OF_CATEGORY_IMAGES = 7
const PAGE_FILTER_SIZE = '&page_size='+ NUMBER_OF_CATEGORY_IMAGES
const CATEGORY_FILTER_ROOT = '&genre_contains='
const CATEGORIES = ['biography', 'comedy', 'history']

// Script fetching best movie data
function displayBestRatedMovie(BEST_MOVIES_FILTER) {
  // Fetch best movie(= highest imdb) main data
  fetch(ENTRYPOINT + BEST_MOVIES_FILTER)
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

          // Open modal and its attributes when button clicked
         let best_movie_modal = document.getElementsByClassName("open-modal-btn")[0];
		 [best_movie_modal, best_movie_img].forEach(function(elements){
		 elements.addEventListener("click", function () {
		 createModal(best_movie_id);})
		 })
      })
     })
    .catch(error => console.error(error));
}

//Script fetching and displaying movies of a given category
function displayMovieCarousel(category_filter, section_id) {

    let carousel_section = document.getElementById(section_id);

    let carousel_container_div = document.createElement('div');
    carousel_section.appendChild(carousel_container_div);
    carousel_container_div.classList.add("carousel-container");

    let left_arrow_button = document.createElement('button');
    carousel_container_div.appendChild(left_arrow_button);
    left_arrow_button.classList.add("left-arrow");
    left_arrow_button.innerText = "<";

    let carousel_inner_div = document.createElement('div');
    carousel_container_div.appendChild(carousel_inner_div);
    carousel_inner_div.classList.add("carousel-inner");

    let carousel_movies_div = document.createElement('div');
    carousel_inner_div.appendChild(carousel_movies_div);
    carousel_movies_div.classList.add("carousel-movies");

    let right_arrow_button = document.createElement('button');
    carousel_container_div.appendChild(right_arrow_button);
    right_arrow_button.classList.add("right-arrow");
    right_arrow_button.innerText = ">";

    fetch(ENTRYPOINT + category_filter)
      .then(response => response.json())
      .then(data => {
        let movies = data.results;

        // Add each image tag inside a div element
        movies.forEach((movie, index) => {
          let image = movie.image_url;
          let id = movie.id;

          let img_div = document.createElement('div');
          let img = document.createElement('img');
          img.src = image;
          img_div.appendChild(img);
          carousel_movies_div.appendChild(img_div);
          img_div.classList.add("carousel-movie");
          img_div.setAttribute("img-index", index);

          // Add a click event listener to each image to open a modal
		  img.addEventListener("click", function () {createModal(id)
		  })
        })
      })
      .catch(error => console.error(error));
}

// main script populating the website data
function buildWebsite(){

    // 1 - Fetch and display Best Movie information
    displayBestRatedMovie(BEST_MOVIES_FILTER)

     // 2 - Fetch and display Top movies of all CATEGORIES in a carousel
    displayMovieCarousel(BEST_MOVIES_FILTER + PAGE_FILTER_SIZE, 'topRatedMoviesSection')

    // 3 - Fetch and display Top movies for each of the three optional CATEGORIES in a carousel
    for (let i = 0; i < CATEGORIES.length; i++)  {
        let category_filter = BEST_MOVIES_FILTER + PAGE_FILTER_SIZE + CATEGORY_FILTER_ROOT + CATEGORIES[i]
        let section_id = CATEGORIES[i] + 'MoviesSection'
        displayMovieCarousel(category_filter, section_id)
    }
}

buildWebsite()
