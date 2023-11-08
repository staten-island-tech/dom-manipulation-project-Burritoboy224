const DOMSelectors = {
    form: document.getElementById("form"),
    input: document.getElementById("input"),
    name: document.getElementById("name-what"),
    type: document.getElementById("type-what"),
    image: document.getElementById("image-what"),
    button: document.getElementById("btn-what"),
    cardsz: document.getElementById("cardsz"),
}

DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    addCard();
    clearCard();
    eraseInfo();
});

function addCard() {
    cardsz.insertAdjacentHTML("beforeend",
        `
    <div class="cards">
    <h2>${DOMSelectors.name.value}</h2>
    <h2>${DOMSelectors.type.value}</h2>
    <img id="cards-image" src="${img = DOMSelectors.image.value}">
    <button class="delete">Remove</button>
    </div>`
    );
}



function clearCard () {
    const button = document.querySelectorAll(".delete");
    button.forEach((button) => 
    button.addEventListener ("click", function (button){
        button.target.parentElement.remove()}
        ))};

function eraseInfo() {
    DOMSelectors.name.value = "";
    DOMSelectors.type.value = "";
    DOMSelectors.image.value = "";
}







