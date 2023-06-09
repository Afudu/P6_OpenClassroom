// Script creating a modal when the featured movie’s button or image is clicked.
// Information in the modal:The image of the movie cover ; Title ; Full genre ; Release date ;
// MPAA rating ; IMDb scoreDirector ; List of actors ; Duration ; Country of origin ;
// Box Office result ; Movie summary

function createModal(movie_id) {
    let modal = document.getElementById("modalSection");
    // Modal opening based on id => img = first class element
    let modal_img_div = document.getElementsByClassName("modal-img")[0];
    let modal_details_div = document.getElementsByClassName("modal-details")[0];
    let close_modal_btn = document.getElementsByClassName("close-modal-btn")[0];
    modal.style.display = "block";

    fetch(ENTRYPOINT + movie_id)
      .then(function(response) {
        if (response.ok) {
            return response.json();
        }
	  })
      .then(function(data) {

      	// Open modal and add details

		modal_img_div.innerHTML = "<img width='50'  src='" +  data.image_url + "'>";

		let title_li = document.createElement("li");
		title_li.innerHTML = "<em>Title: </em>" + data.title;
		modal_details_div.appendChild(title_li);

		let genres_li = document.createElement("li");
		genres_li.innerHTML = "<em>Genre(s): </em>" + data.genres;
		modal_details_div.appendChild(genres_li);

		let date_li = document.createElement("li");
		date_li.innerHTML = "<em>Release date: </em>" + formatDate(data.date_published);
		modal_details_div.appendChild(date_li);

		let mpaa_rating_li = document.createElement("li");
		mpaa_rating_li.innerHTML = "<em>MPAA rating: </em>" + data.rated;
		modal_details_div.appendChild(mpaa_rating_li);

		let imdb_score_li = document.createElement("li");
		imdb_score_li.innerHTML = "<em>IMDb score: </em>" + data.imdb_score;
		modal_details_div.appendChild(imdb_score_li);

		let directors_li = document.createElement("li");
		directors_li.innerHTML = "<em>Director(s): </em>" + data.directors;
		modal_details_div.appendChild(directors_li);

		let actors_li = document.createElement("li");
		actors_li.innerHTML = "<em>Actor(s): </em>" + data.actors;
		modal_details_div.appendChild(actors_li);

		let duration_li = document.createElement("li");
		duration_li.innerHTML = "<em>Duration: </em>" + data.duration + " mn";
		modal_details_div.appendChild(duration_li);

		let country_li = document.createElement("li");
		country_li.innerHTML = "<em>Country of origin: </em>" + data.countries;
		modal_details_div.appendChild(country_li);

		let box_office_results_li = document.createElement("li");
		let box_office_results_li_text = replaceNullToValue(data.worldwide_gross_income);
		box_office_results_li.innerHTML = "<em>Box Office result: </em>" + box_office_results_li_text ;
		modal_details_div.appendChild(box_office_results_li);

		let description_li = document.createElement("li");
		description_li.innerHTML = "<em>Movie summary: </em>" + data.description;
		modal_details_div.appendChild(description_li);

		document.body.style.overflowY = "hidden";

		// Close and remove details when "X" button clicked.
		close_modal_btn.onclick = function() {
		modal.style.display = "none";
		modal_img_div.innerHTML = "";
		modal_details_div.innerHTML = "";
		document.body.style.overflowY = "auto";
		}
	})
    .catch(function(error) {
      console.error('Error:', error);
	});
};

//format date from us to eu
function formatDate(input_date) {
  // Split the date string into year, month, and day
  let parts = input_date.split("-");
  let year = parts[0];
  let month = parts[1];
  let day = parts[2];

  // Return the date in dd/mm/yyyy format
  return `${day}/${month}/${year}`;
}

//replace null values with text
function replaceNullToValue(str) {
  if (str === null) {
    return "Information not available";
  } else {
    return str;
  }
}
