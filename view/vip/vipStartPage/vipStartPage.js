// Retrieving User Data via URL parameters
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const userDataString = urlParams.get('userData');

if (userDataString) {

    const user = JSON.parse(decodeURIComponent(userDataString)); //JS Object

    const nameHeader = document.getElementById("start-page-user-name");
    nameHeader.textContent = user.first_name + " " + user.last_name + "!";

} else {
    console.error("User data not found in query parameters.");
}

function redirectMenu() {
    window.location.href = "/view/vip/vipOrderPage/vipOrderPage.html";
}
