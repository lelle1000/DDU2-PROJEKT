
const FindSameContainer = document.getElementById("FindSameControlsContainer");
const gridContainer = document.getElementById("GridContainer");

gridContainer.parentNode.insertBefore(FindSameContainer, gridContainer);




function FindSameFunction () {
    numberBoxes = document.querySelectorAll(".NumberBox");
    for (let i = 0; i < numberBoxes.length; i++) {
        numberBoxes[i].addEventListener("click", function () {

            const SameBoxes = numberBoxes[i].textContent;

            for (let j = 0; j < numberBoxes.length; j++) {
                if (SameBoxes === numberBoxes[j].textContent) {
                    numberBoxes[j].classList.add("MARKEDColor")
                    numberBoxes[j].classList.remove("NumberBoxColor")

                    document.getElementById("FindSameParagraph").textContent = `${document.querySelectorAll(".MARKEDColor").length} copies of the number ${SameBoxes}`
                }
                if (SameBoxes !== numberBoxes[j].textContent) {
                    numberBoxes[j].classList.remove("MARKEDColor")
                    numberBoxes[j].classList.add("NumberBoxColor")
                }
            }
        }) 
    }   
}

document.getElementById("FindSameButton").addEventListener("click", function () {
    numberBoxes = document.querySelectorAll(".NumberBox");
    for (let i = 0; i < numberBoxes.length; i++) {
        numberBoxes[i].classList.add("NumberBoxColor");
        numberBoxes[i].classList.remove("MARKEDColor");

        document.getElementById("FindSameParagraph").textContent = `Click on a number to find copies`
    } 
})

