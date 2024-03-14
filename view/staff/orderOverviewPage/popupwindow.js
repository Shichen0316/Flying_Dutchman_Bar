function showPopup() {
    const selectedOrders = document.querySelectorAll('#order-area');
    const selectedOrdersList = document.getElementById('selected-orders');

    selectedOrdersList.innerHTML = '';

    selectedOrders.forEach(order => {
        const li = document.createElement('li');
        li.textContent = order.textContent;
        selectedOrdersList.appendChild(li);
    });

    document.getElementById('popup').style.display = 'block';
}

function showPayPopup() {
    // Prompt the user to enter the amount to charge
    const chargeAmount = prompt('Enter the amount to charge:');

    // Check if the user entered a valid amount
    if (chargeAmount !== null && !isNaN(chargeAmount)) {
        // Display a confirmation message with the entered amount
        const confirmationMessage = `Charge amount: ${parseFloat(chargeAmount).toFixed(2)} SEK`;
        alert(confirmationMessage);
    } else {
        // Display an error message if the input is not valid
        alert('Invalid input. Please enter a valid amount.');
    }
}

function showPayFromAccountPopup() {
    // Prompt the user to enter the amount to charge
    const chargeAmount = prompt('Enter the amount to charge:');

    // Check if the user entered a valid amount
    if (chargeAmount !== null && !isNaN(chargeAmount)) {
        // Display a confirmation message with the entered amount
        const confirmationMessage = `Charge amount: ${parseFloat(chargeAmount).toFixed(2)} SEK`;
        alert(confirmationMessage);
    } else {
        // Display an error message if the input is not valid
        alert('Invalid input.');
    }
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function showDiscountPopup() {
    const selectedOrders = document.querySelectorAll('#order-area');
    const selectedOrdersList = document.getElementById('selected-orders-discount');

    selectedOrdersList.innerHTML = '';

    selectedOrders.forEach(order => {
        const li = document.createElement('li');
        li.textContent = order.textContent;
        selectedOrdersList.appendChild(li);
    });

    document.getElementById('discountPopup').style.display = 'block';
}

function discountPopup() {
    alert('Discount given!');
    closePopup();
}

function closeDiscountPopup() {
    document.getElementById('discountPopup').style.display = 'none';
}