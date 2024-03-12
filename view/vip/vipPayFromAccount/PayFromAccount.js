// Logout function
function logoutFunction() {
    alert('Logout successful');
    window.location.href = "/view/vip/vipLoginPage/vipLoginPage.html";
}

let tableTotal = 0;

const translations = {
    en: {
        orderSummary: "Order Summary",
        tableText: "Table",
        totalText: "Total:",
        paymentText: "Please make your payment at the bar counter! <br> Thank you!"
    },
    sv: {
        orderSummary: "Beställningsöversikt",
        tableText: "Bord",
        totalText: "Totalt:",
        paymentText: "Vänligen gör din betalning vid baren! <br> Tack!"
    },
    de: {
        orderSummary: "Bestellungsübersicht",
        tableText: "Tisch",
        totalText: "Gesamt:",
        paymentText: "Bitte leisten Sie Ihre Zahlung an der Bar! <br> Danke!"
    }
};

// Creating Date & Time object
const currentDate = new Date();
const formattedDate = currentDate.getDate() + "/" + (currentDate.getMonth() + 1)  + "/" + currentDate.getFullYear();
const formattedTime = currentDate.getHours() + ":" + currentDate.getMinutes();

const dateTime = formattedDate + " " + formattedTime;

// Fetching orders from the database and processing them
// Fetching orders from the database and processing them
function fetchAndProcessOrders(customerName) {
    return fetch("../../../../models/database/OrderData.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
        })
        .then(data => {
            // Find the first order that matches the customerName
            const matchingOrder = data.orders.find(order => order.customerName === customerName);

            if (!matchingOrder) {
                // Return null if no matching order is found
                return null;
            }

            // Transform the matching order into the desired structure
            const items = Array.isArray(matchingOrder.items) ? matchingOrder.items.map(item => {
                const cost = (item.quantity * item.price).toFixed(2);
                return {
                    name: item.name,
                    quantity: item.quantity.toString(),
                    cost: cost.toString()
                };
            }) : [];

            return [items]; // Return the order as an array (even if it's a single order)
        })
        .catch(error => {
            console.error('Error fetching and processing orders:', error);
            return null;
        });
}


const customerName = "John Doe"; // Replace with the desired customer name
fetchAndProcessOrders(customerName)
    .then(orders => {
        // Ensure that orders is not null and it's an array
        if (orders && Array.isArray(orders)) {
            const ordersContainer = document.querySelector('.payFromAccount-all-orders');

            // Retrieve the selected language from localStorage or set a default language
            const storedLang = localStorage.getItem('selectedLang') || 'en';

            // Update orders content with translated text
            orders.forEach((order, personIndex) => {
                const personLabel = "Person " + (personIndex + 1);
                let totalAmount = 0.00;

                const container = document.createElement("div");
                container.className = "payFromAccount-container";

                const header = document.createElement("div");
                header.className = "payFromAccount-header";

                const orderSummary = document.createElement("h1");
                orderSummary.textContent = translations[storedLang].orderSummary;

                const details = document.createElement("div");
                details.className = "payFromAccount-details";

                const dateTimeText = document.createElement("h2");
                dateTimeText.textContent = new Date().toLocaleString(); // Change this to the actual date/time

                const tableNumber = document.createElement("h2");
                tableNumber.textContent = translations[storedLang].tableText + " 12";

                const personNumber = document.createElement("h2");
                personNumber.textContent = personLabel;

                header.appendChild(orderSummary);
                header.appendChild(details);

                details.appendChild(dateTimeText);
                details.appendChild(tableNumber);
                details.appendChild(personNumber);

                const tableSummary = document.createElement("table");
                tableSummary.className = "payFromAccount-summary";

                order.forEach((item) => {
                    const trSummary = document.createElement("tr");

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

                    totalAmount += parseFloat(item.cost); // Parse cost as float
                });

                const divider = document.createElement("div");
                divider.className = "payFromAccount-divider";

                const tableTotal = document.createElement("table");
                tableTotal.className = "payFromAccount-total";

                const trTotal = document.createElement("tr");

                const tdTotalText = document.createElement("td");
                tdTotalText.textContent = translations[storedLang].totalText;

                const tdTotal = document.createElement("td");
                tdTotal.textContent = totalAmount.toFixed(2);

                trTotal.appendChild(tdTotalText);
                trTotal.appendChild(tdTotal);

                tableTotal.appendChild(trTotal);

                const thankYouText = document.createElement("h3");
                thankYouText.innerHTML = translations[storedLang].paymentText;

                container.appendChild(header);
                container.appendChild(tableSummary);
                container.appendChild(divider);
                container.appendChild(tableTotal);
                container.appendChild(thankYouText);

                ordersContainer.appendChild(container);
            });
        } else {
            // Handle case where orders is null or not an array
            console.error('Invalid orders data:', orders);
        }
    })
    .catch(error => {
        console.error('Error fetching and processing orders:', error);
    });

// Variable to hold the balance
let balance = 1000; // Example balance, replace it with your actual balance value

// Function to handle payment from account
function payFromAccount() {
    // Get the total amount from the table
    const totalAmountElement = document.querySelector('.payFromAccount-total td:last-child');

    // Check if the total bill amount is less than the balance
    if (tableTotal <= balance) {
        // Subtract the total bill amount from the balance
        balance -= tableTotal;
        // Show payment successful message
        alert('Payment successful');
    } else {
        // Show insufficient balance message
        alert('Insufficient balance');
    }
}





