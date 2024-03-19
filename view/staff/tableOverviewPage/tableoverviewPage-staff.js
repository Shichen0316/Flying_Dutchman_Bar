// Event listener to execute when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Calls the highlightTables function to highlight tables with orders
    highlightTables();
    // Displays today's date on the page
    displayTodaysDate();
});

// Highlights tables that have orders and adds functionality to view orders on click
function highlightTables() {
    // Retrieves the orders from Local Storage
    const ordersString = localStorage.getItem('allOrders');
    if (ordersString) {
        const orders = JSON.parse(ordersString);
        // Iterates through each order to highlight tables and add click listeners
        orders.forEach(orderContainer => {
            orderContainer.forEach(order => {
                // Checks if the order has a table number
                if (order.tableNumber) {
                    // Selects the button corresponding to the table number
                    const tableButton = document.querySelector(`.button-table${order.tableNumber}`);
                    if (tableButton) {
                        // Adds a 'highlight' class to the button to highlight it
                        tableButton.classList.add('highlight');
                        // Adds a click event listener to display orders for the table
                        tableButton.addEventListener('click', () => displayOrdersForTable(order.tableNumber));
                    }
                }
            });
        });
    } else {
        console.log('No orders in Local Storage.');
    }
}

// Displays orders for a specific table in a popup
function displayOrdersForTable(tableNumber) {
    const ordersString = localStorage.getItem('allOrders');
    if (!ordersString) {
        alert('No orders found in Local Storage.');
        return;
    }

    const orders = JSON.parse(ordersString);
    // Filters orders for the specific table number
    const ordersForTable = orders.filter(orderContainer => orderContainer.some(order => order.tableNumber === tableNumber));

    if (!ordersForTable || ordersForTable.length === 0) {
        alert(`No orders found for table ${tableNumber}.`);
        return;
    }

    // Constructs HTML content to display the orders for the table
    let orderDetailsHtml = `<h2>Orders for Table ${tableNumber}:</h2>`;
    ordersForTable.forEach(orderContainer => {
        orderContainer.forEach((order, index) => {
            orderDetailsHtml += `<div class="order-item"><strong>Order ${index + 1}:</strong> ${order.date}<br>`;
            order.items.forEach(item => {
                orderDetailsHtml += `${item.quantity} x ${item.name} - $${item.cost}<br>`;
            });
            orderDetailsHtml += '</div>';
        });
    });

    // Inserts the order details into the popup and displays it
    const popup = document.getElementById('orderPopup');
    popup.innerHTML = orderDetailsHtml + '<button onclick="closePopup()">Close</button>' + '<button onclick="redirectOrderOverview()">Proceed to Order Overview</button>';
    popup.style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

// Displays today's date on the page
function displayTodaysDate() {
    const todaysDateElement = document.getElementById('todaysDate');
    if (!todaysDateElement) return;
    
    const today = new Date();
    // Sets the text content of the todaysDateElement to today's date
    todaysDateElement.textContent = `Today's Date: ${today.toLocaleDateString()}`;
}

// Closes the orders popup
function closePopup() {
    document.getElementById('orderPopup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

// Redirects to the order overview page
function redirectOrderOverview() {
    window.location.href = "/view/staff/orderOverviewPage/orderoverviewPage-staff.html";
}
