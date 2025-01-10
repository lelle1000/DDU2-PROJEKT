

/* Moved down the newly created HTML elements inbetween the Common JS elements */
const SumContainer = document.getElementById("SumControlsContainer")
const gridContainer = document.getElementById("GridContainer")

gridContainer.parentNode.insertBefore(SumContainer, gridContainer)



