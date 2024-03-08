//Fetching Data from JSON

var beers;
var wines;
var cocktails;

fetch("../../../../models/database/DrinksStock.json")
    .then(response => response.json())
    .then(data => {
        beers = data.beers;
        wines = data.wines;
        cocktails = data.cocktails;

        processBeersData();
        processWinesData();
        processCocktailsData();

        const beerTable = document.getElementById("beer-table");
        const wineTable = document.getElementById("wine-table");
        const cocktailTable = document.getElementById("cocktail-table");

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


fetch("../../../../models/database/FoodStock.json")
    .then(response => response.json())
    .then(data => {
        const foodItems = data; // Assuming food items are directly under the root of the JSON object

        const foodTable = document.getElementById("food-table");

        foodItems.forEach(food => {
            const foodRow = document.createElement("tr");

            if (food) {
                // First column -- food name + info button
                const nameColumn = document.createElement("td");

                const container = document.createElement("div");
                container.className = "open-page-food-name";

                const foodName = document.createElement("h2");
                foodName.textContent = food.name;
                foodName.className = "food-name-column";

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
                infoContents.textContent = "Ingredients/ Ingredienser/ Zutaten: " + food.ingredients; // Use a function to get translated ingredient

                infoBox.appendChild(infoContents);
                container.appendChild(infoBox);

                nameColumn.appendChild(container);

                // Second column -- empty column for price
                const priceColumn = document.createElement("td");
                priceColumn.textContent = food.price;
                priceColumn.className = "food-price-column";
                
                // Third column -- quantity buttons
                const buttonColumn = document.createElement("td");
                const minusButton = document.createElement("button");
                minusButton.className = "minus-button";
                minusButton.alt = "Minus";

                minusButton.onclick = function() {
                    const quantitySpan = document.getElementById(food.name + "-quantity-value");

                    let quantity = parseInt(quantitySpan.textContent);
                    if (quantity > 0) {
                        quantitySpan.textContent = quantity - 1;
                    }
                };

                const quantitySpan = document.createElement("span");
                quantitySpan.textContent = "0";
                quantitySpan.id = food.name + "-quantity-value";

                const addButton = document.createElement("button");
                addButton.className = "add-button";
                addButton.alt = "Add";

                addButton.onclick = function() {
                    const quantitySpan = document.getElementById(food.name + "-quantity-value");

                    let quantity = parseInt(quantitySpan.textContent);
                    if (quantity >= 0) {
                        quantitySpan.textContent = quantity + 1;
                    }
                };

                buttonColumn.appendChild(minusButton);
                buttonColumn.appendChild(quantitySpan);
                buttonColumn.appendChild(addButton);

                foodRow.appendChild(nameColumn);
                foodRow.appendChild(priceColumn); // This line is removed
                foodRow.appendChild(buttonColumn);

                foodTable.appendChild(foodRow);
            }

            else {
                // If there's no food item for this cell, create an empty cell
                const cell = document.createElement("td");
                foodRow.appendChild(cell);
            }
        });
    })
    .catch(error => {
        console.error('Error fetching food data:', error);
    });

// Default language
let currentLang = 'en';

// Function to check the count of selected products and display a popup if it exceeds 10
// Function to close the popup
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// Function to check product count and display popup if necessary
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



// Function to trigger redirection to the next page considering the product count
function redirectToNextPage() {
    // Check the count of selected products
    if (checkProductCount()) {
        // Allow redirection to the next page
        window.location.href = "/view/customers/checkPage/checkPage.html";
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









