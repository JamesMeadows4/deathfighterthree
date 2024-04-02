// Document elemets
const changeh1TagBtnEl = document.getElementById("changeh1tagbtn");
const h1El = document.getElementById("h1tag");
const checkboxEl = document.getElementById("checkbox");
const paragraphText = document.getElementById("paragraphText")

// Event listeners
changeh1TagBtnEl.addEventListener("click", changeH1Text);
checkboxEl.addEventListener("change", changeMode)

// Maim function
function changeH1Text() {
    const userInput = prompt("Header content: ")
    if (userInput.trim()) {
        h1El.innerHTML = userInput
    }
}

// Changing the mode of the webpage
function changeMode() {
    if (checkboxEl.checked) {
        // Switch to light mode
        changeh1TagBtnEl.classList = "h1btnlight btn"
        document.body.style.backgroundColor = "white"
        h1El.style.color = "black"
        paragraphText.style.color = "black"
    } else {
        // Switch to dark mode
        changeh1TagBtnEl.classList = "h1btndark btn"
        document.body.style.backgroundColor = "black"
        h1El.style.color = "white"
        paragraphText.style.color = "white"
    }
}
