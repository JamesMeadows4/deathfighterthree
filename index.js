const changeh1TagBtnEl = document.getElementById("changeh1tagbtn");

const h1El = document.getElementById("h1tag");

changeh1TagBtnEl.addEventListener("click", changeH1Text);

function changeH1Text() {
    const userInput = prompt("H1 Tag Name: ")
    h1El.innerHTML = userInput
}
