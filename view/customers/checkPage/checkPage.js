// import vv=view/customers/checkPage/dummy.js
// Customer orders --> need order from database
    //  Person X --> list (x+1)
    // List --> bunch of dictionaries
        // 1 Dictionary --> 1 drink/ 1 food.

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const orders1 = JSON.parse(decodeURIComponent(urlParams.get('temporaryOrderJSON')));
      
        // const orders3 = JSON.parse(orders1);
        const orders = [orders1.items];
        console.log(orders);
    //demo order list     
const orders4 = [
    [

        {name: "Cold Beer",
            quantity: "3",
            cost: "1380.00"},
    
        {name: "Brown Beer",
            quantity: "1",
            cost: "530.00"}
    ],

    [

        {name: "Cold Beer",
            quantity: "4",
            cost: "1380.00"},
    
        {name: "Brown Beer",
            quantity: "1",
            cost: "530.00"}
    ],

    [

        {name: "Cold Beer",
            quantity: "4",
            cost: "1380.00"},
    
        {name: "Brown Beer",
            quantity: "1",
            cost: "530.00"}
    ]

]
// console.log(orders,orders4);
// Creating Date & Time object
const currentDate = new Date();
const formattedDate = currentDate.getDate() + "/" + (currentDate.getMonth() + 1)  + "/" + currentDate.getFullYear();
const formattedTime = currentDate.getHours() + ":" + currentDate.getMinutes();

const dateTime = formattedDate + " " + formattedTime;

// Creating the HTMl dynamically bases on the const orders
const ordersContainer = document.querySelector('.check-page-all-orders');

orders.forEach((order, personIndex) => {


    const personLabel = "Person " + (personIndex + 1);
    let totalAmount = 0.00;
    
    // FIRST div element --> RMB CLOSE
    const container = document.createElement("div");
    container.className = "check-page-container";

    // creating div element in a div element --> RMB CLOSE (CLOSED)
    const header = document.createElement("div");
    header.className = "check-page-header";

    // REB TO APPEND to header(div)
    const orderSummary = document.createElement("h1");
    orderSummary.textContent = "Order Summary";
    
    // creating div element --> RMB CLOSE (CLOSED)
    const details = document.createElement("div");
    details.className = "check-page-details";

    const dateTimeText = document.createElement("h2");
    dateTimeText.textContent = dateTime.toLocaleString();

    const tableNumber = document.createElement("h2");
    tableNumber.textContent = "Table 12";

    const personNumber = document.createElement("h2");
    personNumber.textContent = personLabel;

    header.appendChild(orderSummary);
    header.appendChild(details);

    details.appendChild(dateTimeText);
    details.appendChild(tableNumber);
    details.appendChild(personNumber);

    // SECOND table element --> RMB TO CLOSE! (CLOSED)
    const tableSummary = document.createElement("table");
    tableSummary.className = "check-page-summary";

    order.forEach((item) => {

        //tr element --> rmb to CLOSE
        const trSummary = document.createElement("tr");

        //td element --> rmb to append to trSUmmary
        const tdName = document.createElement("td");
        tdName.textContent = item.name;

        const tdQuantity = document.createElement("td");
        tdQuantity.textContent = item.quantity;

        const tdPrice = document.createElement("td");
        tdPrice.textContent = item.cost;

        trSummary.appendChild(tdName);
        trSummary.appendChild(tdQuantity);
        trSummary.appendChild(tdPrice);

        tableSummary.appendChild(trSummary);

        totalAmount += parseInt(item.cost);
    })

    // THIRD div element --> RMB TO CLOSE (CLOSED)
    const divider = document.createElement("div");
    divider.className = "check-page-divider";

    // FORTH div element --> RMB TO CLOSE (CLOSED)
    const tableTotal = document.createElement("table");
    tableTotal.className = "check-page-total";

    // tr element --> rmb to close (CLOSED)
    const trTotal = document.createElement("tr");

    const tdTotalText = document.createElement("td");
    tdTotalText.textContent = "Total:";

    const tdTotal = document.createElement("td");
    tdTotal.textContent = totalAmount.toFixed(2);

    trTotal.appendChild(tdTotalText)
    trTotal.appendChild(tdTotal);

    tableTotal.appendChild(trTotal);

    // FIFTH h3 element --> RMB TO CLOSE
    const thankYouText = document.createElement("h3");
    thankYouText.innerHTML = "Please make your payment at the bar counter! <br> Thank you!"

    container.appendChild(header);
    container.appendChild(tableSummary);
    container.appendChild(divider);
    container.appendChild(tableTotal);
    container.appendChild(thankYouText);

    ordersContainer.appendChild(container);

});



// Function to save the order data to the JSON file
// const fs = require('fs');
// const fs=require('fs').promises
// const filePath = 'models/database/OrderData.json';
function pushToOrderData(customerName, orders) {
    const fs=require('fs')
    const filePath = 'models/database/OrderData.json';
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
            orders,
            paid: false
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

function redirectStart() {

    pushToOrderData("Guest", orders);

    // Save the order data to the database
    insertDataIntoDatabase(orders);
    window.location.href = "/view/customers/startPage/startPage.html";
}