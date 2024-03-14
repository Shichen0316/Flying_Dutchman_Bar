
//Fetching Data from JSON
var beers;
var wines;
var cocktails;
var specials;

fetch("../../../../models/database/DrinksStock.json")
    .then(response => response.json())
    .then(data => {
        beers = data.beers;
        wines = data.wines;
        cocktails = data.cocktails;
        specials = data.specials;

        processBeersData();
        processWinesData();
        processCocktailsData();
        processSpecialData();

        const beerTable = document.getElementById("beer-table");
        const wineTable = document.getElementById("wine-table");
        const cocktailTable = document.getElementById("cocktail-table");
        const specialTable = document.getElementById("special-table");

        for (let i = 0; i < beers.length; i++) {
            const beerRow = document.createElement("tr");
            const beer = beers[i];
        
            if (beer) {
        
                // Single column for drink name, price, and quantity
                const column = document.createElement("td");
        
                // Drink name
                const beerName = document.createElement("h2");
                beerName.textContent = beer.name;
                beerName.className = "beer-name-column"
        
                // Price
                const priceParagraph = document.createElement("p");
                priceParagraph.textContent = beer.price;
                priceParagraph.className = "beer-price-column"
        
                // Quantity buttons
                const quantitySpan = document.createElement("span");
                quantitySpan.textContent = "0";
                quantitySpan.id = beer.name + "-quantity-value";
        
                const minusButton = document.createElement("button");
                minusButton.className = "minus-button";
                minusButton.alt = "Minus";
                minusButton.onclick = function() {
                    const quantitySpan = document.getElementById(beer.name + "-quantity-value");
                    let quantity = parseInt(quantitySpan.textContent);
                    if (quantity > 0) {
                        quantitySpan.textContent = quantity - 1;
                    }
                };
        
                const addButton = document.createElement("button");
                addButton.className = "add-button";
                addButton.alt = "Add";
                addButton.onclick = function() {
                    const quantitySpan = document.getElementById(beer.name + "-quantity-value");
                    let quantity = parseInt(quantitySpan.textContent);
                    quantitySpan.textContent = quantity + 1;
                };
        
                // Append all elements to the single column
                column.appendChild(beerName);
                column.appendChild(priceParagraph);
                column.appendChild(minusButton);
                column.appendChild(quantitySpan);
                column.appendChild(addButton);
        
                // Append the single column to the row
                beerRow.appendChild(column);
            } else {
                // If there's no beer for this cell, create an empty cell
                const cell = document.createElement("td");
                beerRow.appendChild(cell);
            }
        
            // Append the row to the table
            beerTable.appendChild(beerRow);
        }

        for (let i = 0; i < wines.length; i++) {
            const wineRow = document.createElement("tr");
            const wine = wines[i];
        
            if (wine) {
                // Create a table row
                // Create a single table column for wine name, price, and quantity
        
                // Single column for wine name, price, and quantity
                const column = document.createElement("td");
        
                // Wine name
                const wineName = document.createElement("h2");
                wineName.textContent = wine.name;
                wineName.className = "wine-name-column";
        
                // Price
                const priceParagraph = document.createElement("p");
                priceParagraph.textContent = wine.price;
                priceParagraph.className = "wine-price-column";
        
                // Quantity buttons
                const quantitySpan = document.createElement("span");
                quantitySpan.textContent = "0";
                quantitySpan.id = wine.name + "-quantity-value";
        
                const minusButton = document.createElement("button");
                minusButton.className = "minus-button";
                minusButton.alt = "Minus";
                minusButton.onclick = function() {
                    const quantitySpan = document.getElementById(wine.name + "-quantity-value");
                    let quantity = parseInt(quantitySpan.textContent);
                    if (quantity > 0) {
                        quantitySpan.textContent = quantity - 1;
                    }
                };
        
                const addButton = document.createElement("button");
                addButton.className = "add-button";
                addButton.alt = "Add";
                addButton.onclick = function() {
                    const quantitySpan = document.getElementById(wine.name + "-quantity-value");
                    let quantity = parseInt(quantitySpan.textContent);
                    quantitySpan.textContent = quantity + 1;
                };
        
                // Append all elements to the single column
                column.appendChild(wineName);
                column.appendChild(priceParagraph);
                column.appendChild(minusButton);
                column.appendChild(quantitySpan);
                column.appendChild(addButton);
        
                // Append the single column to the row
                wineRow.appendChild(column);
            } else {
                // If there's no wine for this cell, create an empty cell
                const cell = document.createElement("td");
                wineRow.appendChild(cell);
            }
        
            // Append the row to the table
            wineTable.appendChild(wineRow);
        }


        for (let i = 0; i < cocktails.length; i++) {
            const cocktailRow = document.createElement("tr");
            const cocktail = cocktails[i];
        
            if (cocktail) {
                // Create a table row
                // Create a single table column for cocktail name, price, and quantity
        
                // Single column for cocktail name, price, and quantity
                const column = document.createElement("td");
        
                // Cocktail name
                const cocktailName = document.createElement("h2");
                cocktailName.textContent = cocktail.name;
                cocktailName.className = "cocktail-name-column";
        
                // Price
                const priceParagraph = document.createElement("p");
                priceParagraph.textContent = cocktail.price;
                priceParagraph.className = "cocktail-price-column"
        
                // Quantity buttons
                const quantitySpan = document.createElement("span");
                quantitySpan.textContent = "0";
                quantitySpan.id = cocktail.name + "-quantity-value";
        
                const minusButton = document.createElement("button");
                minusButton.className = "minus-button";
                minusButton.textContent = "-";
                minusButton.alt = "Minus";
                minusButton.onclick = function() {
                    const quantitySpan = document.getElementById(cocktail.name + "-quantity-value");
                    let quantity = parseInt(quantitySpan.textContent);
                    if (quantity > 0) {
                        quantitySpan.textContent = quantity - 1;
                    }
                };
        
                const addButton = document.createElement("button");
                addButton.className = "add-button";
                addButton.textContent = "+";
                addButton.alt = "Add";
                addButton.onclick = function() {
                    const quantitySpan = document.getElementById(cocktail.name + "-quantity-value");
                    let quantity = parseInt(quantitySpan.textContent);
                    quantitySpan.textContent = quantity + 1;
                };
        
                // Append all elements to the single column
                column.appendChild(cocktailName);
                column.appendChild(priceParagraph);
                column.appendChild(minusButton);
                column.appendChild(quantitySpan);
                column.appendChild(addButton);
        
                // Append the single column to the row
                cocktailRow.appendChild(column);
            } else {
                // If there's no cocktail for this cell, create an empty cell
                const cell = document.createElement("td");
                cocktailRow.appendChild(cell);
            }
        
            // Append the row to the table
            cocktailTable.appendChild(cocktailRow);
        }

        for (let i = 0; i < specials.length; i++) {
            const specialRow = document.createElement("tr");
            const special = specials[i];
        
            if (special) {
                // Create a table row
                // Create a single table column for cocktail name, price, and quantity
        
                // Single column for cocktail name, price, and quantity
                const column = document.createElement("td");
        
                // Cocktail name
                const specialName = document.createElement("h2");
                specialName.textContent = special.name;
                specialName.className = "special-name-column";
        
                // Price
                const priceParagraph = document.createElement("p");
                priceParagraph.textContent = special.price;
                priceParagraph.className = "special-price-column"
        
                // Quantity buttons
                const quantitySpan = document.createElement("span");
                quantitySpan.textContent = "0";
                quantitySpan.id = special.name + "-quantity-value";
        
                const minusButton = document.createElement("button");
                minusButton.className = "minus-button";
                minusButton.textContent = "-";
                minusButton.alt = "Minus";
                minusButton.onclick = function() {
                    const quantitySpan = document.getElementById(special.name + "-quantity-value");
                    let quantity = parseInt(quantitySpan.textContent);
                    if (quantity > 0) {
                        quantitySpan.textContent = quantity - 1;
                    }
                };
        
                const addButton = document.createElement("button");
                addButton.className = "add-button";
                addButton.textContent = "+";
                addButton.alt = "Add";
                addButton.onclick = function() {
                    const quantitySpan = document.getElementById(special.name + "-quantity-value");
                    let quantity = parseInt(quantitySpan.textContent);
                    quantitySpan.textContent = quantity + 1;
                };
        
                // Append all elements to the single column
                column.appendChild(specialName);
                column.appendChild(priceParagraph);
                column.appendChild(minusButton);
                column.appendChild(quantitySpan);
                column.appendChild(addButton);
        
                // Append the single column to the row
                specialRow.appendChild(column);
            } else {
                // If there's no cocktail for this cell, create an empty cell
                const cell = document.createElement("td");
                specialRow.appendChild(cell);
            }
        
            // Append the row to the table
            specialTable.appendChild(specialRow);
        }
        
})

function processBeersData() {

    if (beers) {
        beers.forEach(beer => {
            console.log(beer.name);
            console.log(beer.price);
        });
    } else {
        console.log("Beers data has not been fetched yet.");
    }
}
function processWinesData() {

    if (wines) {
        wines.forEach(wine => {
            console.log(wine.name);
            console.log(wine.price);
        });
    } else {
        console.log("Wines data has not been fetched yet.");
    }
}
function processCocktailsData() {

    if (cocktails) {
        cocktails.forEach(cocktail => {
            console.log(cocktail.name);
            console.log(cocktail.price);
        });
    } else {
        console.log("Cocktails data has not been fetched yet.");
    }
}
function processSpecialData() {

    if (specials) {
        specials.forEach(special => {
            console.log(special.name);
            console.log(special.price);
        });
    } else {
        console.log("special data has not been fetched yet.");
    }
}
let foodItems;

fetch("../../../../models/database/FoodStock.json")
    .then(response => response.json())
    .then(data => {
        foodItems = data; // Assuming food items are directly under the root of the JSON object
        const foodTable = document.getElementById("food-table");

        foodItems.forEach(food => {
            const foodRow = document.createElement("tr");

            // First column -- food name + info button
            const nameColumn = document.createElement("td");

            const container = document.createElement("div");
            container.className = "open-page-food-name";

            const foodName = document.createElement("h2");
            foodName.textContent = food.name;

            const infoButton = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            infoButton.setAttribute("xmlns", "http://www.w3.org/2000/svg");
            infoButton.setAttribute("width", "17");
            infoButton.setAttribute("height", "9");
            infoButton.setAttribute("viewBox", "0 0 17 9");
            infoButton.setAttribute("fill", "#212121");
            infoButton.setAttribute("class", "open-page-button-svg");

            infoButton.onclick = function() {
                const infoBox = container.querySelector(".open-page-info-box");
                if (infoBox.style.display === "block") {
                    infoBox.style.display = "none";
                } else {
                    infoBox.style.display = "block";
                }
            };

            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("d", "M8.35238 8.83852C8.43168 8.92526 8.56832 8.92526 8.64762 8.83852L16.4211 0.334942C16.5384 0.206596 16.4473 0 16.2734 0H0.726559C0.552669 0 0.461616 0.206597 0.578942 0.334942L8.35238 8.83852Z");
            path.setAttribute("fill", "#212121");

            infoButton.appendChild(path);

            container.appendChild(foodName);
            container.appendChild(infoButton);

            const infoBox = document.createElement("div");
            infoBox.className = "open-page-info-box";
            infoBox.style.display = "none"; // Initially hide the info box

            const infoContents = document.createElement("h4");
            infoContents.textContent = "Ingredients/ Ingredienser/ Zutaten: " + food.ingredients.join(', '); // Join ingredients array into a string

            infoBox.appendChild(infoContents);
            container.appendChild(infoBox);

            nameColumn.appendChild(container);

            // Second column -- price
            const priceColumn = document.createElement("td");
            priceColumn.textContent = food.price;

            // Third column -- quantity buttons
            const buttonColumn = document.createElement("td");
            const minusButton = document.createElement("button");
            minusButton.className = "minus-button";
            minusButton.textContent = "-";
            minusButton.alt = "Minus";

            minusButton.onclick = function() {
                const quantitySpan = document.getElementById(food.name + "-quantity-value");

                let quantity = parseInt(quantitySpan.textContent);
                if (!isNaN(quantity) && quantity > 0) {
                    quantitySpan.textContent = quantity - 1;
                }
            };

            const quantitySpan = document.createElement("span");
            quantitySpan.textContent = "0";
            quantitySpan.id = food.name + "-quantity-value";

            const addButton = document.createElement("button");
            addButton.className = "add-button";
            addButton.textContent = "+";
            addButton.alt = "Add";

            addButton.onclick = function() {
                const quantitySpan = document.getElementById(food.name + "-quantity-value");

                let quantity = parseInt(quantitySpan.textContent);
                if (!isNaN(quantity)) {
                    quantitySpan.textContent = quantity + 1;
                }
            };

            buttonColumn.appendChild(minusButton);
            buttonColumn.appendChild(quantitySpan);
            buttonColumn.appendChild(addButton);

            foodRow.appendChild(nameColumn);
            foodRow.appendChild(priceColumn);
            foodRow.appendChild(buttonColumn);

            foodTable.appendChild(foodRow);
        });
    })
    .catch(error => {
        console.error('Error fetching food data:', error);
    });


// Default language
let currentLang = 'en';
// Define a variable to store all orders
let allOrders = [];
// Function to check the count of selected products and display a popup if it exceeds 10
// Function to close the popup
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// Function to check product count and display popup if necessary
let spaecialOrder=false;
function checkProductCount() {
    let totalSelectedProducts = 0;

    // Count the number of selected products for beer
    for (let i = 0; i < beers.length; i++) {
        const beer = beers[i];
        const quantitySpan = document.getElementById(beer.name + "-quantity-value");
        totalSelectedProducts += parseInt(quantitySpan.textContent);
    }

    // Count the number of selected products for wine
    for (let i = 0; i < wines.length; i++) {
        const wine = wines[i];
        const quantitySpan = document.getElementById(wine.name + "-quantity-value");
        totalSelectedProducts += parseInt(quantitySpan.textContent);
    }

    // Count the number of selected products for cocktails
    for (let i = 0; i < cocktails.length; i++) {
        const cocktail = cocktails[i];
        const quantitySpan = document.getElementById(cocktail.name + "-quantity-value");
        totalSelectedProducts += parseInt(quantitySpan.textContent);
    }
    // Count the number of selected products for specials
    for (let i = 0; i < specials.length; i++) {
        const special = specials[i];
        const quantitySpan = document.getElementById(special.name + "-quantity-value");
        totalSelectedProducts += parseInt(quantitySpan.textContent);
      
        if(parseInt(quantitySpan.textContent)>0){
            // console.log(quantitySpan);
            spaecialOrder=true;
        }
        
    }

    // Count the number of selected products for food items
    const foodQuantitySpans = document.querySelectorAll('.food-menu span[id$="-quantity-value"]');
    foodQuantitySpans.forEach(span => {
        totalSelectedProducts += parseInt(span.textContent);
    });

    // Check if the total count of selected products is greater than 10
    if (totalSelectedProducts > 10) {
        // Display the popup window
        const popup = document.getElementById('popup');
        popup.style.display = 'block';

        // Prevent redirection to the next page
        return false;
    }

    // If the count of selected products is not greater than 10, allow redirection
    return true;
}

// Attach event listener to the close button
document.getElementById('close-button').addEventListener('click', closePopup);

//document.addEventListener('DOMContentLoaded', function() {
  //  document.querySelector('.order-page-confirm-button').addEventListener('click', redirectToNextPage);
//});

// Function to trigger redirection to the next page considering the product count
function redirectToNextPage() {


   
    // Check the count of selected products
    if (checkProductCount()) {
        // Allow redirection to the next page
        // const order = createOrder();
        createOrder();
        window.temporaryOrderJSON = JSON.stringify(allOrders);
            alert('Order confirmed and saved!');
        if(spaecialOrder==true){
            window.location.href = "/view/vip/vipcodePage/codePage-vip.html?temporaryOrderJSON=" + encodeURIComponent(temporaryOrderJSON);

        }
        else{
            
            // Encode the JSON string to make it safe for passing in the URL
            console.log(allOrders);
            console.log("not working ",spaecialOrder);
            window.location.href = "/view/vip/vipcheckPage/vipcheckPage.html?temporaryOrderJSON=" + encodeURIComponent(temporaryOrderJSON);
        
        }
    }
}





// Example usage: Add this function to the click event of the redirection button
// e.g., <button onclick="redirectToNextPage()">Next</button>

// filter functions

// Filter food by allergy
function filterFoodByAllergy(allergy) {
    return new Promise((resolve, reject) => {
        // Fetch food data and filter based on the specified allergy
        fetch("../../../../models/database/FoodStock.json")
            .then(response => response.json())
            .then(data => {
                const foodItems = data.foodItems || [];
                const filteredFood = foodItems.filter(food => {
                    return food.ingredients.includes(allergy) || food.allergies.includes(allergy);
                });
                resolve(filteredFood);
            })
            .catch(error => {
                console.error('Error fetching food data:', error);
                reject(error);
            });
    });
}

// Display filtered food
function displayFilteredFood(filteredFood) {
    // Apply styling to filtered food items
    filteredFood.forEach(food => {
        const foodElement = document.getElementById(food.name);
        if (foodElement) {
            foodElement.style.color = "red";
        }
    });
}

// Filter items by allergy
function filterItemsByAllergy() {
    // Get the user input from the input field
    const allergyInput = document.getElementById("allergy-input").value;
    // Call the filter function with the user input
    filterItems(allergyInput);
}

// Main filter function
function filterItems(allergy) {
    // Call the specific filter functions for drinks and food with the allergy input
    Promise.all([filterCocktailsByAllergy(allergy), filterFoodByAllergy(allergy)])
        .then(([filteredCocktails, filteredFood]) => {
            // Display the filtered items
            displayFilteredFood(filteredFood);
        })
        .catch(error => {
            console.error('Error filtering items:', error);
        });
}

// Add event listener for language change
$(".order-page-language-dropdown").change(function () {
    const lang = $(this).val();
    fetch("../../../../models/database/FoodStock.json")
        .then(response => response.json())
        .then(data => {
            updateFoodTable(data, lang);
            // Store the selected language in localStorage
            localStorage.setItem('selectedLang', lang);
        })
        .catch(error => {
            console.error('Error fetching food data:', error);
        });
});

// new 

const order = [];
// Function to load existing orders from LocalStorage
function loadExistingOrders() {
    const ordersString = localStorage.getItem('allOrders');
    if (ordersString) {
        allOrders = JSON.parse(ordersString);
    } else {
        allOrders = [];
    }
    //updateOrderListDisplay(); // Update the display whenever you load orders
}

document.addEventListener('DOMContentLoaded', function() {
    loadExistingOrders(); // Load existing orders when the page loads
});

function createOrder1() {
    // Collect selected items for the new order
    const selectedItems = [];

    // Collect selected beers
    for (const beer of beers) {
        const quantity = parseInt(document.getElementById(beer.name + "-quantity-value").textContent);
        if (quantity > 0) {
            selectedItems.push({ name: beer.name, quantity, cost: (beer.price * quantity).toFixed(2) });
        }
    }

    // Collect selected wines
    for (const wine of wines) {
        const quantity = parseInt(document.getElementById(wine.name + "-quantity-value").textContent);
        if (quantity > 0) {
            selectedItems.push({ name: wine.name, quantity, cost: (wine.price * quantity).toFixed(2) });
        }
    }

    // Collect selected cocktails
    for (const cocktail of cocktails) {
        const quantity = parseInt(document.getElementById(cocktail.name + "-quantity-value").textContent);
        if (quantity > 0) {
            selectedItems.push({ name: cocktail.name, quantity, cost: (cocktail.price * quantity).toFixed(2) });
        }
    }
      // Collect selected specials
      for (const special of specials) {
        const quantity = parseInt(document.getElementById(special.name + "-quantity-value").textContent);
        if (quantity > 0) {
            selectedItems.push({ name: special.name, quantity, cost: (special.price * quantity).toFixed(2) });
        }
    }

    // Collect selected food items
    for (const food of foodItems) {
        const quantity = parseInt(document.getElementById(food.name + "-quantity-value").textContent);
        if (quantity > 0) {
            selectedItems.push({ name: food.name, quantity, cost: (food.price * quantity).toFixed(2) });
        }
    }

    // Add the selected items to the allOrders array
    if (selectedItems.length > 0) {
        allOrders.push(selectedItems);
    }
}
function createOrder() {
    // Collect selected items for the new order
    const selectedItems = [];

    // Collect selected beers
    for (const beer of beers) {
        const quantity = parseInt(document.getElementById(beer.name + "-quantity-value").textContent);
        if (quantity > 0) {
            selectedItems.push({ name: beer.name, quantity, cost: (beer.price * quantity).toFixed(2) });
        }
    }

    // Collect selected wines
    for (const wine of wines) {
        const quantity = parseInt(document.getElementById(wine.name + "-quantity-value").textContent);
        if (quantity > 0) {
            selectedItems.push({ name: wine.name, quantity, cost: (wine.price * quantity).toFixed(2) });
        }
    }

    // Collect selected cocktails
    for (const cocktail of cocktails) {
        const quantity = parseInt(document.getElementById(cocktail.name + "-quantity-value").textContent);
        if (quantity > 0) {
            selectedItems.push({ name: cocktail.name, quantity, cost: (cocktail.price * quantity).toFixed(2) });
        }
    }
    

     // Collect selected specials
     for (const special of specials) {
        const quantity = parseInt(document.getElementById(special.name + "-quantity-value").textContent);
        if (quantity > 0) {
            selectedItems.push({ name: special.name, quantity, cost: (special.price * quantity).toFixed(2) });
        }
    }

    // Collect selected food items
    for (const food of foodItems) {
        const quantity = parseInt(document.getElementById(food.name + "-quantity-value").textContent);
        if (quantity > 0) {
            selectedItems.push({ name: food.name, quantity, cost: (food.price * quantity).toFixed(2) });
        }
    }
    console.log("Selected items:", selectedItems);

    // Collect the table number and person from the page
    const tableNumberElement = document.querySelector('.order-page-table-number h1');
    const tableNumber = tableNumberElement.textContent; // Assumes your table number is directly in this h1

    // Get today's date in YYYY-MM-DD format
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1).toString().padStart(2, '0') + '-' + today.getDate().toString().padStart(2, '0');
    const existingOrders = [];
    if (selectedItems.length > 0) {

        // Append new order with additional details
        existingOrders.push({
            items: selectedItems,
            tableNumber: tableNumber,
            date: date
        });
        // Append new order to the existing orders
        allOrders.push(existingOrders);
        // Save updated orders list back to LocalStorage
        console.log('Order created:', allOrders);
        saveOrdersToLocalStorage(allOrders); // Pass the updated orders list to be saved
        //updateOrderListDisplay();
    }
    

}
// function updateOrderListDisplay() {
//     const orderList = document.getElementById('order-list');
//     orderList.innerHTML = ''; // Clear the previous content

//     // Loop through allOrders and populate the order list
//     allOrders.forEach((order, index) => {
//         const listItem = document.createElement('li');
//         listItem.textContent = `Order ${index + 1}: `;
//         listItem.setAttribute('data-index', index); // Set custom attribute for index
        
//         order.forEach(item => {
//             const itemText = `${item.quantity} ${item.name} - $${item.cost}`;
//             const itemElement = document.createElement('div');
//             itemElement.textContent = itemText;
//             listItem.appendChild(itemElement);
//         });

//         // Create a delete button for each order
//         const deleteButton = document.createElement('button');
//         deleteButton.textContent = 'Delete';
//         deleteButton.addEventListener('click', () => deleteOrder(index));
//         listItem.appendChild(deleteButton);
//         listItem.draggable = true;
//         orderList.appendChild(listItem);
//     });
// }
function updateOrderListDisplay() {
    const orderList = document.getElementById('order-list');
    orderList.innerHTML = ''; // Clear the previous content

    // Loop through allOrders (which is an array of arrays of order objects)
    allOrders.forEach(orderContainer => {
        orderContainer.forEach(order => {
            const listItem = document.createElement('li');
            listItem.textContent = `Order for Table ${order.tableNumber}: `;
            
            order.items.forEach(item => {
                const itemText = `${item.quantity} x ${item.name} - $${item.cost}`;
                const itemElement = document.createElement('div');
                itemElement.textContent = itemText;
                listItem.appendChild(itemElement);
            });
            
            // You might want to add a delete button or other elements here
            
            orderList.appendChild(listItem);
        });
    });
}

function saveOrdersToLocalStorage(orders) {
    console.log('Saving orders to LocalStorage', orders);
    localStorage.setItem('allOrders', JSON.stringify(orders));
}

function deleteOrder(index) {
    allOrders.splice(index, 1); // Remove the order at the specified index
    updateOrderListDisplay(); // Update the order list display
}



// Add an event listener to the "Add Person" button
document.addEventListener('DOMContentLoaded', function() {
    // Setup confirm button event listener
    document.querySelector('.order-page-confirm-button').addEventListener('click', redirectToNextPage);
    
    // Optionally, set up the "Add Person" button event listener

} );

function resetQuantities() {
    // Reset beer quantities
    for (const beer of beers) {
        document.getElementById(beer.name + '-quantity-value').textContent = '0';
    }

    // Reset wine quantities
    for (const wine of wines) {
        document.getElementById(wine.name + '-quantity-value').textContent = '0';
    }

    // Reset cocktail quantities
    for (const cocktail of cocktails) {
        document.getElementById(cocktail.name + '-quantity-value').textContent = '0';
    }

    // Reset food item quantities
    for (const food of foodItems) {
        document.getElementById(food.name + '-quantity-value').textContent = '0';
    }
}
