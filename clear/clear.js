
const ClearContainer = document.getElementById("ClearControlsContainer");
const gridContainer = document.getElementById("GridContainer");

gridContainer.parentNode.insertBefore(ClearContainer, gridContainer)

function ClearClick () {
    let numberBoxes = document.querySelectorAll(".NumberBox") 
    for (let i = 0; i < numberBoxes.length; i++) {
        numberBoxes[i].addEventListener("click", function () {
            if (numberBoxes[i].classList.contains("NumberBoxColor")) {
                numberBoxes[i].classList.add("ClearHover")
                numberBoxes[i].classList.add("ClearColor")
                numberBoxes[i].classList.remove("NumberBoxColor")
            } else {
                numberBoxes[i].classList.remove("ClearHover")
                numberBoxes[i].classList.remove("ClearColor")
                numberBoxes[i].classList.add("NumberBoxColor")
            }
            document.getElementById("ClearFillButton").addEventListener("click", function () {
                numberBoxes[i].classList.remove("ClearHover")
                numberBoxes[i].classList.remove("ClearColor")
                numberBoxes[i].classList.add("NumberBoxColor")
            })
        } )
    }
}