

/* Moved down the newly created HTML elements inbetween the Common JS elements */
const SumContainer = document.getElementById("SumControlsContainer")
const gridContainer = document.getElementById("GridContainer")

gridContainer.parentNode.insertBefore(SumContainer, gridContainer)



function CalucalteSumOfALL () {
    let numberBoxes = document.querySelectorAll(".NumberBox")
    let SumOfAll = 0;
    for (let i = 0; i < numberBoxes.length; i++) {
        SumOfAll += Number(numberBoxes[i].textContent);
    }
    document.getElementById("SumAllInput").value = SumOfAll
}

let TotalSum = 0;
function SumBoxFunction () {
    let ClickBox = document.querySelectorAll(".NumberBox");
    for (let i = 0; i < ClickBox.length; i++) {
        ClickBox[i].addEventListener("click", function () {
            TotalSum += Number(ClickBox[i].textContent)

            document.getElementById("AddedSum").value = TotalSum;

            ClickBox[i].classList.add("MARKEDColor");
            ClickBox[i].classList.remove("NumberBoxColor")

        })

        document.getElementById("ResetButton").addEventListener("click", function () {
            for(let i = 0; i < ClickBox.length; i++) {
                document.getElementById("AddedSum").value = "-";

                ClickBox[i].classList.add("NumberBoxColor");
                ClickBox[i].classList.remove("MARKEDColor");
            }
        }) 
    }
}



