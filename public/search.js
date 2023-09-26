document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("search-btn");
    const resultsContainer = document.getElementById("results-container");
    const confirmPayButton = document.getElementById("confirm-pay-btn");

    // Get flight elements by their IDs
    const flight1 = document.getElementById("flight-1");
    const flight2 = document.getElementById("flight-2");

    // Enable the button initially since the first flight is selected by default
    confirmPayButton.disabled = false;

    // Handle flight option click
    flight1.addEventListener("click", function () {
        // Toggle selection style
        flight1.classList.toggle("selected");
        flight2.classList.remove("selected"); // Deselect other flight
        // Enable the button if a flight is selected
        confirmPayButton.disabled = !flight1.classList.contains("selected") && !flight2.classList.contains("selected");
    });

    flight2.addEventListener("click", function () {
        // Toggle selection style
        flight2.classList.toggle("selected");
        flight1.classList.remove("selected"); // Deselect other flight
        // Enable the button if a flight is selected
        confirmPayButton.disabled = !flight1.classList.contains("selected") && !flight2.classList.contains("selected");
    });

    // ... (Add any additional JavaScript logic here) ...
});
