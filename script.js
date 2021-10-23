let cityName = document.getElementById("city");
let petName = document.getElementById("pet"); 
let bandText = document.getElementById("band-text");
let bandName = document.getElementById("band-name");

function generateName() {
    bandText.textContent = "Your band name could be";
    bandName.textContent =  cityName.value + " " + petName.value;
}

