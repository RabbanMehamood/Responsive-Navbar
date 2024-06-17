let signUpButtonEl = document.getElementById("signUpButton");
let displayItems = document.getElementById("hidep");
signUpButtonEl.addEventListener("click", function() {
    displayItems.classList.toggle("items-n")
})
