let balance = localStorage.getItem('balance') ? parseFloat(localStorage.getItem('balance')) : 0;

function updateBalance() {
    document.getElementById('balance').textContent = balance;
    localStorage.setItem('balance', balance.toString());
}

function showTopUpWindow(event) {
    event.stopPropagation();
    document.getElementById('topUpWindow').style.display = 'block';
    document.addEventListener('click', handleOutsideClick);
}

function closeTopUpWindow() {
    document.getElementById('topUpWindow').style.display = 'none';
    document.removeEventListener('click', handleOutsideClick);
}

function handleOutsideClick(event) {
    const modal = document.getElementById('topUpWindow');
    if (!modal.contains(event.target)) {
        closeTopUpWindow();
    }
}

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

function logoutFunction() {
    alert('Logout successful');
    window.location.href = "/view/vip/vipLoginPage/vipLoginPage.html";
}

