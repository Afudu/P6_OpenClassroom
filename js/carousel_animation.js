// Script adding event listeners to the left and right arrows in the carousels.

// Define variables
const desktop = window.matchMedia("(min-width: 640px)");
const positions = [0, 0, 0, 0]

for (let i = 0; i < 4; i++) {

    let right_arrow = document.getElementsByClassName("right-arrow")[i];
    let left_arrow = document.getElementsByClassName("left-arrow")[i];
    let carousel_items = document.getElementsByClassName("carousel-movies")[i];
    let position = positions[i]

    setArrowVisibility(position, left_arrow, right_arrow)

    // Add EventListener to the right arrow.
    right_arrow.addEventListener("click", function() {
            position = Math.max(minPosition(), position - 1);
            positions[i] = position
            setArrowVisibility(position, left_arrow, right_arrow);
            let translate = "translate(" + (1 / 7) * 100 * position + "%)"
            carousel_items.style.transform = translate;
            console.log("right-clicked - position = " + position + " / minPosition = " + minPosition());
        })

    // Add EventListener to the right arrow.
    left_arrow.addEventListener("click", function() {
            position = Math.min(0, position + 1);
            positions[i] = position
            setArrowVisibility(position, left_arrow, right_arrow);
            let translate = "translate(" + (1 / 7) * 100 * position + "%)"
            carousel_items.style.transform = translate;
            console.log("left-clicked - position = " + position + " / Translate = " + translate);
        })
}

// Define the minimum position of a given carousel
function minPosition() {
   let minPosition;
    if (desktop.matches) {
       minPosition = -3;
    } else {
       minPosition = -6;
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


