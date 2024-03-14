document.addEventListener('DOMContentLoaded', () => {
    highlightTables();
    displayTodaysDate();
});

function highlightTables() {
    const ordersString = localStorage.getItem('allOrders');
    if (ordersString) {
        const orders = JSON.parse(ordersString);
        orders.forEach(orderContainer => {
            orderContainer.forEach(order => {
                if (order.tableNumber) {
                    const tableButton = document.querySelector(`.button-table${order.tableNumber}`);
                    if (tableButton) {
                        tableButton.classList.add('highlight');
                        // Add click event listener to display orders in a popup
                        tableButton.addEventListener('click', () => displayOrdersForTable(order.tableNumber));
                    }
                }
            });
        });
    } else {
        console.log('No orders in Local Storage.');
    }
}

function displayOrdersForTable(tableNumber) {
    const ordersString = localStorage.getItem('allOrders');
    if (!ordersString) {
        alert('No orders found in Local Storage.');
        return;
    }

    const orders = JSON.parse(ordersString);
    const ordersForTable = orders.filter(orderContainer => orderContainer.some(order => order.tableNumber === tableNumber));

    if (!ordersForTable || ordersForTable.length === 0) {
        alert(`No orders found for table ${tableNumber}.`);
        return;
    }

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

    const popup = document.getElementById('orderPopup');
    popup.innerHTML = orderDetailsHtml + '<button onclick="closePopup()">Close</button>' + '<button onclick="redirectOrderOverview()">Proceed to Order Overview</button>';
    popup.style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function displayTodaysDate() {
    const todaysDateElement = document.getElementById('todaysDate');
    if (!todaysDateElement) return;
    
    const today = new Date();
    todaysDateElement.textContent = `Today's Date: ${today.toLocaleDateString()}`;
}

function closePopup() {
    document.getElementById('orderPopup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}
function redirectOrderOverview() {
    window.location.href = "/view/staff/orderOverviewPage/orderoverviewPage-staff.html";
}