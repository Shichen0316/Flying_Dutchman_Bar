// Add an event listener to the login button to handle the login process
document.getElementById('loginButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    const username = document.getElementById('username').value; // Retrieve the username input
    const password = document.getElementById('password').value; // Retrieve the password input

    // Combine the bartender and VIP customer data for authentication
    const combinedUsers = [...userData.BARTENDERS, ...userData.VIPcustomers];
    // Attempt to find a user that matches the entered credentials
    const user = combinedUsers.find(u => u.username === username && u.password === password);

    if (user) {
        // If a matching user is found, redirect to the VIP start page
        redirectVipStart(user);
    } else {
        // If no matching user is found, display an error message
        document.getElementById('message').innerHTML = '<span>Sorry! We are unable to find the corresponding credentials!</span>';
    }
});

// Function to redirect authenticated users to the VIP start page
function redirectVipStart(user) {
    // Encode the user data to pass it through the URL
    const userData = encodeURIComponent(JSON.stringify(user));
    // Redirect to the VIP start page with the user data
    window.location.href = "/view/vip/vipStartPage/vipStartPage.html?userData=" + userData;
}
