// Function to generate a random digit between 0 and 9
function generateRandomDigit() {
    return Math.floor(Math.random() * 10); // Generate and return the digit
}

// Function to display 4 random digits on the webpage
function displayRandomDigits() {
    // For each rectangle element, generate and display a random digit
    document.getElementById('rectangle1').innerText = generateRandomDigit();
    document.getElementById('rectangle2').innerText = generateRandomDigit();
    document.getElementById('rectangle3').innerText = generateRandomDigit();
    document.getElementById('rectangle4').innerText = generateRandomDigit();
}

// When the webpage loads, display the random digits
window.onload = function() {
    displayRandomDigits();
};

// Function to redirect the user to the next page upon action
function redirectToNextPage() {
    // Specify the URL to redirect to
    window.location.href = "/view/vip/vipOrderPage/vipOrderPage.html";
}
