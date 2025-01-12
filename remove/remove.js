
/* Moved down the newly created HTML elements inbetween the Common JS elements */
const removeControls = document.getElementById("RemoveControlsContainer");
const gridContainer = document.getElementById("GridContainer");

gridContainer.parentNode.insertBefore(removeControls, gridContainer);


let matchingBoxes = [];

document.getElementById("RemRandomButton").addEventListener("click", function () {
    let numberBoxes = document.querySelectorAll(".NumberBoxColor")
    document.getElementById("RemRandomInput").value = Math.round(99 * Math.random());

    for (let i = 0; i < matchingBoxes.length; i++) {
        if (matchingBoxes[i].classList.contains("REMOVEDColor")) {
            continue;
        } else {
            matchingBoxes[i].classList.remove("RemoveCSSColor");
            matchingBoxes[i].classList.add("NumberBoxColor");
        }
    }

    matchingBoxes = [];

    for (let i = 0; i < numberBoxes.length; i++) {

        if (Number(numberBoxes[i].textContent) === Number(document.getElementById("RemRandomInput").value) ) {
            numberBoxes[i].classList.add("RemoveCSSColor", "HOVER")
            numberBoxes[i].classList.remove("NumberBoxColor")
            matchingBoxes.push(numberBoxes[i])
        }

    }
})

document.getElementById("RemButton").addEventListener("click", function () {
    for (let i = 0; i < matchingBoxes.length; i++) {
        matchingBoxes[i].classList.add("REMOVEDColor", "HOVER");
        matchingBoxes[i].textContent = "X";
    };

    if (matchingBoxes.length > 0) {document.getElementById("RemInput").value = `${Number(document.getElementById("RemRandomInput").value)} removed ${matchingBoxes.length} times` 
    } else {
        document.getElementById("RemInput").value = `Nothing to remove`
    }
})