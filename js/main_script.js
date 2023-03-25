const titlesEntryUrl = "http://localhost:8000/api/v1/titles/";
const endpoint = '?page_size=7&sort_by=-imdb_score';
const carouselContainer = document.getElementById('top7Movies_div');

// chosen genres = "Biography", "Documentary", "History"
// Best movies filter : "?sort_by=-imdb_score"  / Default = 5 entries, BM = first in desc list.
// Top 7 Best movies filter : "?page_size=7&sort_by=-imdb_score"  /  => 7 entries.
// Top 7 Biography movies filter : "?genre_contains=biography&sort_by=-imdb_score&page_size=7"  /  => 7 entries.
// Top 7 Biography movies filter : "?sort_by=-imdb_score&page_size=7&genre_contains=biography"  /  => 7 entries.


function displayBestRatedMovie() {
  // Step 1: Fetch best movie(= highest imdb) main data
  fetch(titlesEntryUrl + "?sort_by=-imdb_score")
    .then(response => response.json())
    .then(data => {
      // Step 2: Get the best movie url / id
      let best_movie_url = data.results[0].url;
      let best_movie_id = data.results[0].id;
      // Step 3: Fetch the best movie data
      fetch(best_movie_url)
      .then(response => response.json())
      .then(data => {
         // Step 4: Add best movie information
         let best_movie_title = document.getElementById("bestRatedMovie_title");
         best_movie_title.innerText = data.title;

         let best_movie_description = document.getElementById("bestRatedMovie_description");
         best_movie_description.innerText = data.description;

         let best_movie_img = document.getElementById("bestRatedMovie_img");
         best_movie_img.innerHTML = "<img align='right' width='182' height='280' src='" + data.image_url +"'>";
         best_movie_img.classList.add("open-modal-btn");

          // Step 5: Open modal and its attributes when movie_img clicked
         //let open_modal = document.getElementsByClassName("open-modal-btn");
		 best_movie_img.addEventListener("click", function () {
		 createModal(best_movie_id);
         // console.log(best_movie_id);
         })
      })
     })
    .catch(error => console.error(error));
}

displayBestRatedMovie()

//top7Movies - V1
function displayMovieCarousel() {

    fetch(titlesEntryUrl + endpoint)
      .then(response => response.json())
      .then(data => {
        const movies = data.results;

        // Create the image tag inside div element
        movies.forEach((movie, index) => {
          const image = movie.image_url;
          const id = movie.id;
          const img_div = document.createElement('div');
          const img = document.createElement('img');
          img.src = image;
          img_div.appendChild(img);
          carouselContainer.appendChild(img_div);
          img_div.classList.add("open-modal-btn", "carousel-movie");
          img_div.setAttribute("img-index", index);

          // Add a click event listener to each image to open a modal
		  img_div.addEventListener("click", function () {createModal(id)
		  })

		  //console.log(img_div)

          })

          // Add event listeners to the left and right arrows

      })
      .catch(error => console.error(error));
}

displayMovieCarousel()
