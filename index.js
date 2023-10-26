const DOMSelectors = {
    form: document.getElementById("form"),
    input: document.querySelectorAll("input"),
    pokemon: document.getElementById("pokemon"),
    type: document.getElementById("type"),
    image: document.getElementById("image"),
    button: document.getElementById("btn"),
    cards: document.querySelector("cards"),
}
DOMSelectors.form.addEventListener('submit', function (event) {  
    event.preventDefault()
    makecard();
    eraseInfo();
    clearCard();
})
 function makecard() {
 let pokemon = DOMSelectors.pokemon.value;
 let type = DOMSelectors.type.value;
 let image = DOMSelectors.image.value;
 DOMSelectors.box.insertAdjacentHTML
 `<div class="card-maker">
 <h2>Name: ${pokemon.Name}</h2>
 <img src= "${pokemon.image}" alt=">
 <h2>Type: ${pokemon.type}</h2>
 <h3 class="pokemon-url" id="image-url">${cards.url}</h3>
 </div>`
 }


function eraseInfo() {
    DOMSelectors.pokemon.value = "";
    DOMSelectors.type.value = "";
    DOMSelectors.image.value = "";
  }