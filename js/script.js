// Define UI
var celsius = document.querySelector("#celsius");
var result = document.querySelector("#result");

// Define Function
function celsiusToFahrenheit() {
    var fahrenheit = (celsius.value * 9 / 5) + 32;
    result.innerText = fahrenheit;
};

// Define Event Listener
celsius.addEventListener("keyup", celsiusToFahrenheit);

