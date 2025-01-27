
const AddUpContainer = document.getElementById("AddUpToControlsContainer");
const gridContainer = document.getElementById("GridContainer");

gridContainer.parentNode.insertBefore(AddUpContainer, gridContainer)

let InputValue = document.getElementById("AddUpToInput")

document.getElementById("AddUpToButton").addEventListener("click", function () {
    let PromptedNumber = Number(InputValue.value)
    let numberBoxes = document.querySelectorAll(".NumberBox");
    for (let i = 0; i < numberBoxes.length; i++) {
        for (let j = i + 1; j < numberBoxes.length; j++) {
            if (Number(numberBoxes[i].textContent) + Number(numberBoxes[j].textContent) === PromptedNumber) {
                numberBoxes[i].classList.add("MARKEDColor")
                numberBoxes[i].classList.remove("NumberBoxColor")
                numberBoxes[j].classList.add("MARKEDColor")
                numberBoxes[j].classList.remove("NumberBoxColor")
                return;
            } else {
                numberBoxes[i].classList.remove("MARKEDColor")
                numberBoxes[i].classList.add("NumberBoxColor")
                numberBoxes[j].classList.remove("MARKEDColor")
                numberBoxes[j].classList.add("NumberBoxColor")
            }
        }
    }

})