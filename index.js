const DOMSelectors = {
    button: document.getElementById("btn"),
    text: document.querySelector("#text"),
    box: document.getElementById("big-black-box"),
    points: document.querySelectorAll(".point"),
};
    
    
    function backgroundAndText (background, text) {
        background.style.backgroundColor= "blue";
        text.textContent= "This is now a big red box";
        text.style.fontSize= "40px";
    }
    console.log(DOMSelectors.points);
    backgroundAndText(DOMSelectors.box, DOMSelectors.text);

    DOMSelectors.button.addEventListener("click", function (){
        backgroundAndText(DOMSelectors.box, DOMSelectors.text);
    })