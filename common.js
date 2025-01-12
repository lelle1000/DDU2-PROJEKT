
function CreateNumberBox (AmountOfBoxes) {
    gridContainer.innerHTML = "";
    for (let i = 0; i < AmountOfBoxes; i++) {
        let Numberbox = document.createElement("div");
        Numberbox.textContent = Math.round(99 * Math.random());
        Numberbox.classList.add("FontClass", "NumberBoxColor", "NumberBox", "HOVER")

        GridContainer.append(Numberbox)
    }

    if (typeof CalucalteSumOfALL === "function") CalucalteSumOfALL(); 
    if (typeof SumBoxFunction === "function") SumBoxFunction(); 

    if (typeof ClearClick === "function") ClearClick(); 

    if (typeof FindSameFunction === "function") FindSameFunction(); 
};



const HomeContainer = document.createElement("div");
document.body.append(HomeContainer);
HomeContainer.id = "HomeContainer";

const Home = document.createElement("a");
HomeContainer.append(Home)
Home.textContent = "Home";
Home.setAttribute("href", "../index.html");
Home.classList.add("FontClass")


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


CommonButton.addEventListener("click", function () {
    CreateNumberBox(CommonInput.value)
})

const GridContainer = document.createElement("div");
document.body.append(GridContainer);
GridContainer.id = "GridContainer"

