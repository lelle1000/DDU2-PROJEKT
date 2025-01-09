
/* Moved down the newly created HTML elements inbetween the Common JS elements */
const removeControls = document.getElementById("RemoveControls");
const gridContainer = document.getElementById("GridContainer");

gridContainer.parentNode.insertBefore(removeControls, gridContainer);

