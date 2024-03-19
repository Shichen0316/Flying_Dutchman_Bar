async function displayOrders() {
    const orderListContainer = document.getElementById('order-container');
    orderListContainer.innerHTML = ''; // Clear previous content

    try {
        // Retrieve orders from local storage under the key 'allOrders' and parse them
        const allOrders = JSON.parse(localStorage.getItem('allOrders')) || [];

        // Check if we have any orders stored
        if (allOrders.length === 0) {
            const noOrdersMessage = document.createElement('p');
            noOrdersMessage.textContent = 'No items in the order.';
            orderListContainer.appendChild(noOrdersMessage);
            return;
        }

        // Iterate through each "outer" array containing the orders
        allOrders.forEach(orders => {
            // Now iterate through each "inner" array to get the individual orders
            orders.forEach(order => {
                const orderItem = document.createElement('div');
                orderItem.classList.add('order-item');
                orderItem.innerHTML = `
                    <p>Table Number: ${order.tableNumber}</p>
                    <p>Date: ${order.date}</p>
                    <h4>Items:</h4>
                `;
                orderItem.id = "drag-source";
                orderItem.draggable = true;
                // Ensure dragStartHandler is defined elsewhere in your scripts
                orderItem.addEventListener("dragstart", dragStartHandler);

                order.items.forEach(item => {
                    const itemDetails = document.createElement('div');
                    itemDetails.innerHTML = `
                        <p>Name: ${item.name}</p>
                        <p>Quantity: ${item.quantity}</p>
                        <p>Cost: ${item.cost}</p>
                    `;

                    orderItem.appendChild(itemDetails);
                });

                orderListContainer.appendChild(orderItem);
            });
        });
    } catch (error) {
        console.error('Error processing order data:', error);
    }
}

window.onload = function () {
    displayOrders();
};
