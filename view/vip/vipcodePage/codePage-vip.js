function generateRandomDigit() {
    return Math.floor(Math.random() * 10); // Generate a single random digit (0-9)
}

function displayRandomDigits() {
    // Generate and display 4 random digits
    document.getElementById('rectangle1').innerText = generateRandomDigit();
    document.getElementById('rectangle2').innerText = generateRandomDigit();
    document.getElementById('rectangle3').innerText = generateRandomDigit();
    document.getElementById('rectangle4').innerText = generateRandomDigit();
}

// Call the function to display the digits when the page loads
window.onload = function() {
    displayRandomDigits();
};
function redirectToNextPage() {
    window.location.href = "/view/vip/vipOrderPage/vipOrderPage.html";
}
