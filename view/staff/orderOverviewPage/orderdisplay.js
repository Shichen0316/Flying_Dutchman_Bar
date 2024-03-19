async function displayOrders() {
    const orderListContainer = document.getElementById('order-container');
    orderListContainer.innerHTML = ''; // Clear previous content

    try {
        const allOrders = JSON.parse(localStorage.getItem('allOrders')) || [];
        if (allOrders.length === 0) {
            const noOrdersMessage = document.createElement('p');
            noOrdersMessage.textContent = 'No items in the order.';
            orderListContainer.appendChild(noOrdersMessage);
            return;
        }

        allOrders.forEach(orders => {
            orders.forEach(order => {
                const orderItem = document.createElement('div');
                orderItem.classList.add('order-item');
                orderItem.innerHTML = `
                    <p>Table Number: ${order.tableNumber}</p>
                    <p>Date: ${order.date}</p>
                    <p>Paid: ${order.paid ? 'Yes' : 'No'}</p>
                    <h4>Items:</h4>
                `;
                orderItem.id = "drag-source";
                orderItem.draggable = !order.paid;
                orderItem.addEventListener("dragstart", dragStartHandler);

                let totalCost = 0; // Initialize total cost for the order

                order.items.forEach(item => {
                    const itemDetails = document.createElement('div');
                    itemDetails.innerHTML = `
                        <p>Name: ${item.name}</p>
                        <p>Quantity: ${item.quantity}</p>
                        <p>Cost: ${item.cost}</p>
                    `;
                    orderItem.appendChild(itemDetails);

                    totalCost += item.cost * item.quantity; // Accumulate total cost
                });

                // Adjust total cost for the discount, if any
                if (order.discount && !isNaN(order.discount)) {
                    totalCost -= parseFloat(order.discount); // Subtract the discount amount from the total cost
                }

                // Display total cost for the order
                const totalCostElement = document.createElement('p');
                totalCostElement.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
                orderItem.appendChild(totalCostElement);

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
