// Customer orders --> need order from database
//  Person X --> list (x+1)
// List --> bunch of dictionaries
// 1 Dictionary --> 1 drink/ 1 food.

const orders = [
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

// Creating Date & Time object
const currentDate = new Date();
const formattedDate = currentDate.getDate() + "/" + (currentDate.getMonth() + 1)  + "/" + currentDate.getFullYear();
const formattedTime = currentDate.getHours() + ":" + currentDate.getMinutes();

const dateTime = formattedDate + " " + formattedTime;

// Creating the HTMl dynamically bases on the const orders
const ordersContainer = document.querySelector('.check-page-all-orders');

document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the selected language from localStorage or set a default language
    const storedLang = localStorage.getItem('selectedLang') || 'en';

    // Define translations object based on your language mappings
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

    // Update orders content with translated text
    orders.forEach((order, personIndex) => {
        const personLabel = "Person " + (personIndex + 1);
        let totalAmount = 0.00;

        const container = document.createElement("div");
        container.className = "check-page-container";
        container.id = "drag-source"
        container.draggable = true;
        container.addEventListener("dragstart", dragStartHandler);

        const header = document.createElement("div");
        header.className = "check-page-header";

        const orderSummary = document.createElement("h1");
        orderSummary.textContent = translations[storedLang].orderSummary;

        const details = document.createElement("div");
        details.className = "check-page-details";

        const dateTimeText = document.createElement("h2");
        dateTimeText.textContent = dateTime.toLocaleString();

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
        tableSummary.className = "check-page-summary";

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

            totalAmount += parseInt(item.cost);
        })

        const divider = document.createElement("div");
        divider.className = "check-page-divider";

        const tableTotal = document.createElement("table");
        tableTotal.className = "check-page-total";

        const trTotal = document.createElement("tr");

        const tdTotalText = document.createElement("td");
        tdTotalText.textContent = translations[storedLang].totalText;

        const tdTotal = document.createElement("td");
        tdTotal.textContent = totalAmount.toFixed(2);

        trTotal.appendChild(tdTotalText)
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
});


// redirect to Pages
function redirectStart() {
    window.location.href = "/view/customers/startPage/startPage.html";
}

function dragStartHandler(event) {
    // Set the dragged data (you can customize this data)
    event.dataTransfer.setData("text/plain", "Delete me");

    // Add a visual indication to the dragged element
    event.target.style.opacity = "0.5";
}

function dragOverHandler(event) {
    event.preventDefault();
    event.target.style.border = "2px dashed #fff";
}

function dropHandler(event) {
    event.preventDefault();
    event.target.style.border = "";

    const draggedData = event.dataTransfer.getData("text/plain");

    if (draggedData === "Delete me") {
        const draggedElement = document.getElementById("drag-source");
        draggedElement.parentNode.removeChild(draggedElement);

        console.log("Item deleted!");
    }
}