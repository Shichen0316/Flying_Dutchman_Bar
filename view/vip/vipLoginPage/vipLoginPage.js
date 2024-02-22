document.getElementById('loginButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Access the userData variable directly
    const combinedUsers = [...userData.BARTENDERS, ...userData.VIPcustomers];
    const user = combinedUsers.find(u => u.username === username && u.password === password);

    if (user) {
        document.getElementById('message').innerHTML = '<span style="color: green;">Login successful!</span>';
    } else {
        document.getElementById('message').innerHTML = '<span style="color: red;">Invalid username or password.</span>';
    }
});
