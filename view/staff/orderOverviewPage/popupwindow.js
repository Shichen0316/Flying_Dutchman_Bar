//popup window showing selected orders - Pay
function showPopup() {

    //retrieve selected orders
    const selectedOrders = document.querySelectorAll('#order-area');
    const selectedOrdersList = document.getElementById('selected-orders');

    selectedOrdersList.innerHTML = '';

    //show the selected orders
    selectedOrders.forEach(order => {
        const li = document.createElement('li');
        li.textContent = order.textContent;
        selectedOrdersList.appendChild(li);
    });

    //display the popup window
    document.getElementById('popup').style.display = 'block';
}

//show pay popup prompt asking for payment amount
function showPayPopup() {
    const chargeAmount = prompt('Enter the amount to charge:');

    // check if the user entered a valid amount
    if (chargeAmount !== null && !isNaN(chargeAmount)) {
        // show confirmation message showing the entered amount
        const confirmationMessage = `Charge amount: ${parseFloat(chargeAmount).toFixed(2)} SEK`;
        alert(confirmationMessage);
    } else {
        // show error message if the input is not valid
        alert('Invalid input. Please enter a valid amount.');
    }
}

//show pay from account popup prompt asking for amount
function showPayFromAccountPopup() {
    const chargeAmount = prompt('Enter the amount to charge:');

    // check if the user entered a valid amount
    if (chargeAmount !== null && !isNaN(chargeAmount)) {
        // show confirmation message showing the entered amount
        const confirmationMessage = `Charge amount: ${parseFloat(chargeAmount).toFixed(2)} SEK`;
        alert(confirmationMessage);
    } else {
        // show error message if the input is not valid
        alert('Invalid input.');
    }
}

//close the popup window
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

//popup window showing selected orders - Discount
function showDiscountPopup() {

    //retrieve selected orders
    const selectedOrders = document.querySelectorAll('#order-area');
    const selectedOrdersList = document.getElementById('selected-orders-discount');

    selectedOrdersList.innerHTML = '';

    //show the selected orders
    selectedOrders.forEach(order => {
        const li = document.createElement('li');
        li.textContent = order.textContent;
        selectedOrdersList.appendChild(li);
    });

    //display the popup window
    document.getElementById('discountPopup').style.display = 'block';
}

//show popup prompt asking for discount amount
function discountPopup() {
    alert('Discount given!');
    closePopup();
}

//close the discount popup window
function closeDiscountPopup() {
    document.getElementById('discountPopup').style.display = 'none';
}