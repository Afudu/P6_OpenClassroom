// Script adding event listeners to the left and right arrows in the carousels.

// Set the constant variables
const nbrOfCarousels = 4
const nbrOfImagesShownDesktopView = 4
const nbrOfImagesShownMobileView = 1
const initialPositions = [0, 0, 0, 0]
const desktop = window.matchMedia("(min-width: 640px)");

// add event listeners to the arrows of each block
for (let i = 0; i < nbrOfCarousels; i++) {

    let right_arrow = document.getElementsByClassName("right-arrow")[i];
    let left_arrow = document.getElementsByClassName("left-arrow")[i];
    let carousel_movies = document.getElementsByClassName("carousel-movies")[i];
    let position = initialPositions[i]

    // Add EventListener to the right arrow.
    right_arrow.addEventListener("click", function() {
            position = Math.max(minPosition(), position - 1);
            initialPositions[i] = position
            setArrowVisibility(position, left_arrow, right_arrow);
            let translate = "translate(" + (1 / nbrOfCategoryImages) * 100 * position + "%)"
            carousel_movies.style.transform = translate;
            console.log("right-clicked - position = " + position + " / minPosition = " + minPosition());
        });

    // Add EventListener to the left arrow.
    left_arrow.addEventListener("click", function() {
            position = Math.min(0, position + 1);
            initialPositions[i] = position
            setArrowVisibility(position, left_arrow, right_arrow);
            let translate = "translate(" + (1 / nbrOfCategoryImages) * 100 * position + "%)"
            carousel_movies.style.transform = translate;
            console.log("left-clicked - position = " + position + " / minPosition = " + minPosition());
            });

    // Add event listener for handing switching from desktop to mobile or vice versa.
    desktop.addEventListener("change", function() {
        position = Math.max(minPosition(), position);
        initialPositions[i] = position
        setArrowVisibility(position, left_arrow, right_arrow);
        var translate = "translate(" + (1 / nbrOfCategoryImages) * 100 * position + "%)"
        carousel_movies.style.transform = translate;
        console.log("change occurred - new position = "+ position + " / minPosition = " + minPosition());
        });
   }

// Define the minimum position of a given carousel
function minPosition() {
   let minPosition;
    if (desktop.matches) {
       minPosition = nbrOfImagesShownDesktopView - nbrOfCategoryImages;
    } else {
       minPosition = nbrOfImagesShownMobileView - nbrOfCategoryImages;
    }
    return minPosition;
}

// Set the left and right arrows visibility.
function setArrowVisibility(position, left_arrow, right_arrow) {
    if (position === 0) {
        left_arrow.style.visibility = "hidden"
    } else {
        left_arrow.style.visibility = "visible"
    }
    if (position === minPosition()) {
        right_arrow.style.visibility = "hidden"
    } else {
        right_arrow.style.visibility = "visible"
    }
}

