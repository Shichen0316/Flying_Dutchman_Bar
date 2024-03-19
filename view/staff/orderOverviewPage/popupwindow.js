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
    const tableNumber = prompt('Enter the table number of the order to pay:');
    const chargeAmount = prompt('Enter the amount to charge:');

    if (chargeAmount !== null && !isNaN(chargeAmount)) {
        let allOrders = JSON.parse(localStorage.getItem('allOrders')) || [];
        let found = false;

        for (let orders of allOrders) {
            for (let order of orders) {
                if (order.tableNumber === tableNumber) {
                    order.paid = true; // Mark the order as paid
                    found = true;
                    break;
                }
            }
            if (found) break;
        }

        if (!found) {
            alert('Order not found.');
            return;
        }

        localStorage.setItem('allOrders', JSON.stringify(allOrders));
        alert(`Charge amount: ${parseFloat(chargeAmount).toFixed(2)} SEK. Marked as paid.`);

        displayOrders(); // Refresh the orders display to show the updated paid status
    } else {
        alert('Invalid input.');
    }
}

//close the popup window
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Popup window showing selected orders - Discount
function showDiscountPopup() {
    // Retrieve selected orders
    const selectedOrders = document.querySelectorAll('#order-area');
    const selectedOrdersList = document.getElementById('selected-orders-discount');

    selectedOrdersList.innerHTML = '';

    // Show the selected orders
    selectedOrders.forEach(order => {
        const li = document.createElement('li');
        li.textContent = order.textContent;
        selectedOrdersList.appendChild(li);
    });

    // Display the popup window
    document.getElementById('discountPopup').style.display = 'block';

    // Prompt for discount percentage
    const discountPercentage = prompt('Enter the discount percentage:');
    if (discountPercentage !== null && !isNaN(discountPercentage)) {
        applyDiscount(parseFloat(discountPercentage));
    } else {
        alert('Invalid input. Please enter a valid discount percentage.');
    }
}
// Function to apply discount
function applyDiscount(discountPercentage) {
    const allOrders = JSON.parse(localStorage.getItem('allOrders')) || [];
    let totalDiscount = 0;

    // Apply discount to each order
    allOrders.forEach(orders => {
        orders.forEach(order => {
            // Calculate total cost for the order
            let orderTotal = order.items.reduce((acc, item) => acc + (item.cost * item.quantity), 0);
            // Calculate discount amount
            let discountAmount = (orderTotal * discountPercentage) / 100;
            // Update order total after discount
            orderTotal -= discountAmount;
            totalDiscount += discountAmount; // Accumulate total discount
            // Update order display with the discounted amount
            order.discount = discountAmount.toFixed(2);
        });
    });

    // Save updated orders to local storage
    localStorage.setItem('allOrders', JSON.stringify(allOrders));

    // Display total discount
    alert(`Total discount applied: $${totalDiscount.toFixed(2)}`);
    // Refresh orders display to show the updated discount
    displayOrders();
}
//show popup prompt asking for discount amount
function discountPopup() {
    alert('Discount given!');
    closePopup();
}
function showChangeorderPopup() {
    // Prompt for table number and item name to identify which item to edit
    const tableNumber = prompt('Enter the table number of the order:');
    const itemName = prompt('Enter the name of the item you wish to change:');

    // Retrieve all orders from local storage
    let allOrders = JSON.parse(localStorage.getItem('allOrders')) || [];
    
    // Find the order by table number
    let orderToUpdate = allOrders.flat().find(order => order.tableNumber === tableNumber);
    
    if (!orderToUpdate) {
        alert('Order not found!');
        return;
    }

    // Find the item within the order
    let itemToUpdate = orderToUpdate.items.find(item => item.name === itemName);
    
    if (!itemToUpdate) {
        alert('Item not found!');
        return;
    }

    // Prompt for new name and cost
    const newOrderName = prompt('Enter the new item name:', itemToUpdate.name);
    const newOrderPrice = prompt('Enter the new price:', itemToUpdate.cost);

    // Validate and update item
    if (newOrderName && !isNaN(newOrderPrice)) {
        itemToUpdate.name = newOrderName;
        itemToUpdate.cost = newOrderPrice;
        localStorage.setItem('allOrders', JSON.stringify(allOrders));
        alert('Item updated!');
    } else {
        alert('Invalid input. Please enter a valid name and price.');
    }
}

//close the discount popup window
function closeDiscountPopup() {
    document.getElementById('discountPopup').style.display = 'none';
}