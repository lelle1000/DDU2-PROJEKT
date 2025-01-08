/* Used functions */
function CreateNumberBox (AmountOfBoxes) {
    GridContainer.innerHTML = '';
    
    for (let i = 0; i < AmountOfBoxes; i++) {
        let Numberbox = document.createElement("div");
        Numberbox.textContent = Math.round(99 * Math.random());

        Numberbox.classList.add("FontClass", "NumberBox")

        GridContainer.append(Numberbox)
    }
};



/* Element shortcuts */
let a = document.createElement("a");
let p = document.createElement("p");
let div = document.createElement("div");
let button = document.createElement("button");
let input = document.createElement("input");


/* Home Link on every document */
const Home = document.createElement("a");
document.body.append(Home);
Home.textContent = "Home";
Home.setAttribute("href", "../index.html");
Home.classList.add("FontClass")
Home.id = "Home"


/* How many numbers in the grid paragraph + Input + Create */
const CommonContainer = div;
document.body.append(CommonContainer);
CommonContainer.id = "CommonContainer";

const CommonParagraph = p;
CommonContainer.append(CommonParagraph);
CommonParagraph.textContent = "How many numbers in the grid?";
CommonParagraph.classList.add("FontClass");

const CommonInput = input;
CommonContainer.append(CommonInput);
CommonInput.classList.add("FontClass");
CommonInput.style.textAlign = "center";
CommonInput.id = "CommonInput";

const CommonButton = button;;
CommonContainer.append(CommonButton);
CommonButton.textContent = "Create";
CommonButton.classList.add("FontClass");
CommonButton.id = "CommonButton";

/* Grid-Layout and Numbers */
CommonButton.addEventListener("click", function () {
    CreateNumberBox(CommonInput.value)
})

const GridContainer = div;
document.body.append(GridContainer);
GridContainer.id = "GridContainer"