document.getElementById('loginButton').addEventListener('click', function(event) {

    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Access the userData variable directly
    const combinedUsers = [...userData.BARTENDERS, ...userData.VIPcustomers];
    const user = combinedUsers.find(u => u.username === username && u.password === password);

    if (user) {
        redirectstaffstartPage();
    } else {
        document.getElementById('message').innerHTML = '<span>Sorry! We are unable to find the corresponding credentials!</span>';
    }
});

function redirectstaffstartPage() {
    window.location.href = "/view/staff/staffStartpage/startPage-staff.html";
}
