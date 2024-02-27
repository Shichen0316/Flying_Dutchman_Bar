document.getElementById('loginButton').addEventListener('click', function(event) {

    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Access the userData variable directly
    const combinedUsers = [...userData.BARTENDERS, ...userData.VIPcustomers];
    const user = combinedUsers.find(u => u.username === username && u.password === password);

    if (user) {
        redirectVipStart(user);
    } else {
        document.getElementById('message').innerHTML = '<span>Sorry! We are unable to find the corresponding credentials!</span>';
    }
});

function redirectVipStart(user) {
    
    const userData = encodeURIComponent(JSON.stringify(user));
    window.location.href = "/view/vip/vipStartPage/vipStartPage.html?userData=" + userData;
    //window.location.href = "/view/vip/vipStartPage/vipStartPage.html";
}
