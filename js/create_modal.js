// Script creating a modal when the featured movie’s button or image is clicked.
//Information in the modal:The image of the movie cover ; Title ; Full genre ; Release date ;
// MPAA rating ; IMDb scoreDirector ; List of actors ; Duration ; Country of origin ;
//Box Office result ; Movie summary

function createModal(movieId) {
    const modal = document.getElementById("modalSection");

    const close_modal = document.getElementsByClassName("close-modal-btn")[0];
    modal.style.display = "block";

    fetch(endpoint + movieId)
      .then(function(response) {
        if (response.ok) {
            return response.json();
        }
	  })
      .then(function(data) {

      	//Open modal and add details - modal opening based on id => img = first class element
		let modal_img = document.getElementsByClassName("modal-img")[0];
		modal_img.innerHTML = "<p><img src='" +  data.image_url + "'></p>";
		let modal_details = document.getElementsByClassName("modal-details");

		let title_li = document.createElement("li");
		title_li.innerHTML = "<em>Title: </em>" + data.title;
		modal_details[0].appendChild(title_li);

		let genres_li = document.createElement("li");
		genres_li.innerHTML = "<em>Genre(s): </em>" + data.genres;
		modal_details[0].appendChild(genres_li);

		let date_li = document.createElement("li");
		date_li.innerHTML = "<em>Release date: </em>" + data.date_published;
		modal_details[0].appendChild(date_li);

		let mpaa_rating_li = document.createElement("li");
		mpaa_rating_li.innerHTML = "<em>MPAA rating: </em>" + data.rated;
		modal_details[0].appendChild(mpaa_rating_li);

		let imdb_score_li = document.createElement("li");
		imdb_score_li.innerHTML = "<em>IMDb score: </em>" + data.imdb_score;
		modal_details[0].appendChild(imdb_score_li);

		let directors_li = document.createElement("li");
		directors_li.innerHTML = "<em>Director(s): </em>" + data.directors;
		modal_details[0].appendChild(directors_li);

		let actors_li = document.createElement("li");
		actors_li.innerHTML = "<em>Actor(s): </em>" + data.actors;
		modal_details[0].appendChild(actors_li);

		let duration_li = document.createElement("li");
		duration_li.innerHTML = "<em>Duration: </em>" + data.duration + " mn";
		modal_details[0].appendChild(duration_li);

		let country_li = document.createElement("li");
		country_li.innerHTML = "<em>Country of origin: </em>" + data.countries;
		modal_details[0].appendChild(country_li);

		let box_office_results = document.createElement("li");
		box_office_results.innerHTML = "<em>Box Office result: </em>" + data.worldwide_gross_income;
		modal_details[0].appendChild(box_office_results);

		let description_li = document.createElement("li");
		description_li.innerHTML = "<em>Movie summary: </em>" + data.description;
		modal_details[0].appendChild(description_li);

		// Close and remove details when "X" button clicked.
		close_modal.onclick = function() {
		modal.style.display = "none";
		let modal_img = document.getElementsByClassName("modal-img")[0];
		modal_img.innerHTML = "";
		let modal_data = document.getElementsByClassName("modal-details")[0];
		modal_data.innerHTML = "";
		}

    	// Close and remove details when user clicked away from window.
		window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
			let modal_img = document.getElementsByClassName("modal-img")[0];
			modal_img.innerHTML = "";
			let modal_data = document.getElementsByClassName("modal-details")[0];
			modal_data.innerHTML = "";
		  	}
	  	}
	})
    .catch(function(error) {
      console.error('Error:', error);
	});
};
