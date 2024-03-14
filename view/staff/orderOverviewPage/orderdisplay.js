async function displayOrders() {
    const orderListContainer = document.getElementById('order-container');
    orderListContainer.innerHTML = ''; // Clear previous content

    try {
        const response = await fetch('OrderData.json'); // Assuming OrderData.json is in the same directory
        const orderData = await response.json();
        const orders = orderData.orders || [];

        if (orders.length === 0) {
            const noOrdersMessage = document.createElement('p');
            noOrdersMessage.textContent = 'No items in the order.';
            orderListContainer.appendChild(noOrdersMessage);
            return;
        }

        orders.forEach(order => {
            const orderItem = document.createElement('div');
            orderItem.classList.add('order-item');
            orderItem.innerHTML = `
                <p>Order ID: ${order.orderId}</p>
                <p>Date: ${order.date}</p>
                <p>Customer Name: ${order.customerName}</p>
                <h4>Items:</h4>
            `;
            orderItem.id = "drag-source"
            orderItem.draggable = true;
            orderItem.addEventListener("dragstart", dragStartHandler);

            order.items.forEach(item => {
                const itemDetails = document.createElement('div');
                itemDetails.innerHTML = `
                    <p>Name: ${item.name}</p>
                    <p>Quantity: ${item.quantity}</p>
                    <p>Price: ${item.price}</p>
                `;

                orderItem.appendChild(itemDetails);
            });

            orderListContainer.appendChild(orderItem);
        });
    } catch (error) {
        console.error('Error fetching order data:', error);
    }
}

window.onload = function () {
    displayOrders();
};