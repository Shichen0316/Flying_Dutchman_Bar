const fs = require('fs');

// Data to append
const newOrder = {
    "orderId": "987654",
    "date": "2024-02-24",
    "customerName": "Alice Johnson",
    "items": [
        {
            "name": "Cold Beer",
            "quantity": 2,
            "price": 4.50
        },
        {
            "name": "Wine",
            "quantity": 1,
            "price": 12.00
        }
    ]
};

// Path to the JSON file
const filePath = 'models/database/OrderData.json';

// Read existing data from the file
// fs.readFile(filePath, 'utf8', (err, existingData) => {
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
//     }

//     let jsonData;
//     try {
//         // Parse existing JSON data
//         jsonData = JSON.parse(existingData);

//         // If existing data does not contain an "orders" array, create one
//         if (!Array.isArray(jsonData.orders)) {
//             jsonData.orders = [];
//         }
//     } catch (parseError) {
//         console.error('Error parsing JSON:', parseError);
//         return;
//     }

//     // Append new order data to existing JSON array
//     jsonData.orders.push(newOrder);

//     // Write updated JSON data back to the file
//     fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), 'utf8', (writeErr) => {
//         if (writeErr) {
//             console.error('Error writing file:', writeErr);
//         } else {
//             console.log('Order appended successfully.');
//         }
//     });
// });

function pushToOrderData(customerName, orders) {
    fs.readFile(filePath, 'utf8', (err, existingData) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
    
        let jsonData;
        try {
            // Parse existing JSON data
            jsonData = JSON.parse(existingData);
    
            // If existing data does not contain an "orders" array, create one
            if (!Array.isArray(jsonData.orders)) {
                jsonData.orders = [];
            }
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
            return;
        }
    
        // Calculate the next available orderId
        const nextOrderId = getNextOrderId(jsonData.orders || []);
    
        // Get today's date
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const date = `${year}-${month}-${day}`;
    
        // Add orderId, date, and customerName to the new order item
        const newOrderItem = {
            orderId: nextOrderId,
            date,
            customerName,
            orders
        };
    
        // Append new order data to existing JSON array
        jsonData.orders.push(newOrderItem);
    
        // Write updated JSON data back to the file
        fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), 'utf8', (writeErr) => {
            if (writeErr) {
                console.error('Error writing file:', writeErr);
            } else {
                console.log('Order appended successfully.');
            }
        });
    });
}
function getNextOrderId(orders) {
    // Find the maximum orderId in the existing orders array
    const maxOrderId = orders.reduce((max, order) => Math.max(max, parseInt(order.orderId)), 0);
    // Increment the maximum orderId to get the next available orderId
    return (maxOrderId + 1).toString();
}
// Example usage:
const customerName = "John Doe";
const orders = [
    { name: "Cold Beer", quantity: 3, price: 4.50 },
    { name: "Brown Beer", quantity: 1, price: 5.30 }
];

// Call the function to push the new order data
pushToOrderData(customerName, orders);