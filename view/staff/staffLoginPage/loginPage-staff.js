//event listener to login button
document.getElementById('loginButton').addEventListener('click', function(event) {

    event.preventDefault();

    //retrieve the value from username and password fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // access the userData variable
    const combinedUsers = [...userData.BARTENDERS, ...userData.VIPcustomers];

    //find the user with username and password
    const user = combinedUsers.find(u => u.username === username && u.password === password);

    //check if the information is correct
    if (user) {
        //call redirecting to staff start page function if data is correct
        redirectstaffstartPage();
    } else {
        //show message if data is incorrect
        document.getElementById('message').innerHTML = '<span>Sorry! We are unable to find the corresponding credentials!</span>';
    }
});

//function to redirect to the staff start page
function redirectstaffstartPage() {
    window.location.href = "/view/staff/staffStartpage/startPage-staff.html";
}