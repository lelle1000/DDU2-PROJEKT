/* Used functions */
function CreateNumberBox (AmountOfBoxes) {
    gridContainer.innerHTML = "";
    for (let i = 0; i < AmountOfBoxes; i++) {
        let Numberbox = document.createElement("div");
        Numberbox.textContent = Math.round(99 * Math.random());
        Numberbox.classList.add("FontClass", "NumberBoxColor", "NumberBox", "HOVER")

        GridContainer.append(Numberbox)
    }

    SumBoxFunction() // Sum Of All Function
    CalucalteSumOfALL() // Sum Of All Function

    ClearClick
};

/* Home Link on every document */

const HomeContainer = document.createElement("div");
document.body.append(HomeContainer);
HomeContainer.id = "HomeContainer";

const Home = document.createElement("a");
HomeContainer.append(Home)
Home.textContent = "Home";
Home.setAttribute("href", "../index.html");
Home.classList.add("FontClass")



/* How many numbers in the grid paragraph + Input + Create */
const CommonContainer = document.createElement("div");
document.body.append(CommonContainer);
CommonContainer.id = "CommonContainer";

const CommonParagraph = document.createElement("p");
CommonContainer.append(CommonParagraph);
CommonParagraph.textContent = "How many numbers in the grid?";
CommonParagraph.classList.add("FontClass");

const CommonInput = document.createElement("input");
CommonContainer.append(CommonInput);
CommonInput.classList.add("FontClass");
CommonInput.style.textAlign = "center";
CommonInput.id = "CommonInput";

const CommonButton = document.createElement("button");;
CommonContainer.append(CommonButton);
CommonButton.textContent = "Create";
CommonButton.classList.add("FontClass", "CENTER");
CommonButton.id = "CommonButton";

/* Grid-Layout and Numbers */
CommonButton.addEventListener("click", function () {
    CreateNumberBox(CommonInput.value)
})

const GridContainer = document.createElement("div");
document.body.append(GridContainer);
GridContainer.id = "GridContainer"