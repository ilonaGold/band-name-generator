const city = document.getElementById("city");
const pet = document.getElementById("pet"); 
const bandText = document.getElementById("band-text");
const bandName = document.getElementById("band-name");
const button = document.getElementById("btn");
const inputEl = document.getElementsByClassName("input-el");


button.addEventListener("click", function generateName() {
    bandText.textContent = "Your band name could be";
    bandName.textContent =  city.value + " " + pet.value;
    for(let i = 0; i < inputEl.length; i++) {
        inputEl[i].value = "";
    }
})


