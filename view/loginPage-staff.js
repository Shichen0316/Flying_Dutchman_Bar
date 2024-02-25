document.addEventListener('DOMContentLoaded', function () {
    // Function to handle login button click
    function handleLogin() {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Replace these conditions with your actual authentication logic
        if (username === 'admin' && password === 'password') {
            alert('Login successful');
        } else {
            alert('Invalid credentials');
        }
    }

    // Attach the handleLogin function to the login button
    var loginButton = document.getElementById('loginButton');
    if (loginButton) {
        loginButton.addEventListener('click', handleLogin);
    }
});