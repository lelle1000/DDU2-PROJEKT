

/* Moved down the newly created HTML elements inbetween the Common JS elements */
const AddUpContainer = document.getElementById("AddUpToControlsContainer");
const gridContainer = document.getElementById("GridContainer");

gridContainer.parentNode.insertBefore(AddUpContainer, gridContainer)

document.getElementById("AddUpToButton").addEventListener("click", function () {
    let numberBoxes = document.querySelectorAll(".NumberBoxes")
})