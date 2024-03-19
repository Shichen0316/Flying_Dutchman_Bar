// Function to navigate to the table overview page
function redirectTableoverview() {
    // Redirects the window to the table overview page for staff
    window.location.href = "/view/staff/tableOverviewPage/tableoverviewPage-staff.html";
}

// Function to navigate to the order overview page
function redirectOrderoverview() {
    // Redirects the window to the order overview page for staff
    window.location.href = "orderoverviewPage-staff.html";
}

// Function to log out the current user
function logoutFunction() {
    // Alerts the user that logout was successful
    alert('Logout successful');
    // Redirects the window to the home page
    window.location.href = "view/homePage.html";
}
