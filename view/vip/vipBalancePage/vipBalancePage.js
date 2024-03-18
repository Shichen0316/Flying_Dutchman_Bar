//retrieve balance data from local storage, set to 0 by default
let balance = localStorage.getItem('balance') ? parseFloat(localStorage.getItem('balance')) : 0;

//function to update the balance and store it in local storage
function updateBalance() {
    document.getElementById('balance').textContent = balance;
    localStorage.setItem('balance', balance.toString());
}

//show popup window asking for topping up amount
function showTopUpWindow(event) {
    event.stopPropagation();
    document.getElementById('topUpWindow').style.display = 'block';
    //event listener to handle click outside the popup window
    document.addEventListener('click', handleOutsideClick);
}

//close the popup window by clicking outside
function closeTopUpWindow() {
    document.getElementById('topUpWindow').style.display = 'none';
    document.removeEventListener('click', handleOutsideClick);
}

//handle clicks outside the window
function handleOutsideClick(event) {
    const modal = document.getElementById('topUpWindow');
    if (!modal.contains(event.target)) {
        closeTopUpWindow();
    }
}

//topping up balance function
function topUpBalance() {
    const amount = parseFloat(document.getElementById('topUpAmount').value);
    if (!isNaN(amount) && amount > 0) {
        balance += amount;
        updateBalance();
        closeTopUpWindow();
        alert(`Done!`);
    } else {
        alert('Input Invalid.');
    }
}

updateBalance();

//logout function
function logoutFunction() {
    alert('Logout successful');
    //redirect to vip login page
    window.location.href = "/view/vip/vipLoginPage/vipLoginPage.html";
}

