// Customer orders --> need order from database
    //  Person X --> list (x+1)
    // List --> bunch of dictionaries
        // 1 Dictionary --> 1 drink/ 1 food.

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const orders1 = JSON.parse(decodeURIComponent(urlParams.get('temporaryOrderJSON')));
        const orders3 = JSON.parse(orders1);
        const orders = [orders3.items];
        // console.log(orders);
        
const orders4 = [
    [

        {name: "Cold Beer",
            quantity: "3",
            cost: "1380.00"},
    
        {name: "Brown Beer",
            quantity: "1",
            cost: "530.00"}
    ],

    // [

    //     {name: "Cold Beer",
    //         quantity: "4",
    //         cost: "1380.00"},
    
    //     {name: "Brown Beer",
    //         quantity: "1",
    //         cost: "530.00"}
    // ],

    // [

    //     {name: "Cold Beer",
    //         quantity: "4",
    //         cost: "1380.00"},
    
    //     {name: "Brown Beer",
    //         quantity: "1",
    //         cost: "530.00"}
    // ]

]
console.log(orders,orders4);
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
function saveOrderToDatabase(orderData) {
    // Read existing orders from the JSON file
    fs.readFile('models/database/Order.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading Order.json:', err);
            return;
        }

        let orders = [];
        if (data) {
            // Parse existing orders from the file
            orders = JSON.parse(data);
        }

        // Add the new order data to the orders array
        orders.push(orderData);

        // Convert the updated orders data to JSON format
        const updatedData = JSON.stringify(orders, null, 4);

        // Write the updated data back to the JSON file
        fs.writeFile('models/database/Order.json', updatedData, 'utf8', (err) => {
            if (err) {
                console.error('Error writing Order.json:', err);
                return;
            }
            console.log('Order saved successfully!');
        });
    });
}

const fs = require('fs');

// Function to insert new JSON data into the existing JSON database
function insertDataIntoDatabase(newData) {
    // Read the existing JSON database
    fs.readFile('models/database/OrderData.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading database:', err);
            return;
        }

        let database = [];
        if (data) {
            // Parse the existing JSON database into a JavaScript object
            database = JSON.parse(data);
        }

        // Insert the new data into the database
        database.push(newData);

        // Convert the updated JavaScript object back to JSON
        const updatedData = JSON.stringify(database, null, 4);

        // Write the updated JSON data back to the database file
        fs.writeFile('path/to/your/database.json', updatedData, 'utf8', (err) => {
            if (err) {
                console.error('Error writing to database:', err);
                return;
            }
            console.log('Data inserted into database successfully!');
        });
    });
}



// Insert the new data into the database


// redirect to Pages
// function redirectStart() {
//     window.location.href = "/view/customers/startPage/startPage.html";
// }

function redirectStart() {
    // Save the order data to the database
    insertDataIntoDatabase(orders);
    window.location.href = "/view/customers/startPage/startPage.html";
}