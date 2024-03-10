//Fetching Data from JSON

var beers;
var wines;
var cocktails;

let lowStock = "";
// drinks less than 30 will be shown
// food less than 10 will be shown

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
                priceParagraph.textContent = beer.price + " " + "Kr";
                priceParagraph.className = "beer-price-column"

                // Quantity
                const QuantityParagraph = document.createElement("p");
                QuantityParagraph.textContent = beer.stock;
                QuantityParagraph.className = "beer-price-stock"

                // Remove Button
                const removeButton = document.createElement("button");
                removeButton.className = "beer-remove-button";
                removeButton.textContent = "REMOVE";
                removeButton.onclick = function() {
                    const rowToRemove = this.parentNode.parentNode; // tr element
                    rowToRemove.remove();
                };
                

                // Refill Button
                const refillButton = document.createElement("button");
                refillButton.className = "beer-refill-button";
                refillButton.textContent = "REFILL";
                refillButton.onclick = function() {
                    const refillAmount = parseInt(quantitySpan.textContent);
                    let currentAmount = parseInt(QuantityParagraph.textContent);

                    currentAmount += refillAmount;
                    QuantityParagraph.textContent = currentAmount.toString();
                }

                // Quantity buttons
                const quantitySpan = document.createElement("span");
                quantitySpan.textContent = "0";
                quantitySpan.id = beer.name + "-quantity-value"
        
                const minusButton = document.createElement("button");
                minusButton.className = "minus-button";
                minusButton.alt = "Minus";
                minusButton.onclick = function() {
                    const quantitySpan = document.getElementById(beer.name + "-quantity-value");
                    let quantity = parseInt(quantitySpan.textContent);
                    if (quantitySpan.textContent > 1) {
                        quantitySpan.textContent = quantity - 1;
                        refillButton.style.background = "#44BA3A";
                    }

                    else if (quantitySpan.textContent == 1 ) {
                        quantitySpan.textContent = quantity - 1;
                        refillButton.style.background = "rgba(68, 186, 58, 0.50)";
                    }
                };
        
                const addButton = document.createElement("button");
                addButton.className = "add-button";
                addButton.alt = "Add";
                addButton.onclick = function() {
                    const quantitySpan = document.getElementById(beer.name + "-quantity-value");
                    let quantity = parseInt(quantitySpan.textContent);
                    quantitySpan.textContent = quantity + 1;
                    if (quantitySpan.textContent > 0) {
                        refillButton.style.background = "#44BA3A";
                    }
                };

                const editButton = document.createElement("img");
                editButton.src = "../../assets/editButton.svg";
                editButton.style.width = "20px";
                editButton.style.height = "20px"; 
                editButton.className = "beer-edit-button"

                editButton.onclick = function() {
                    const beerNameInputBox = document.createElement("input");
                    beerNameInputBox.type = "text";
                    beerNameInputBox.value = beerName.textContent;
                    beerNameInputBox.className = "beer-name-input";
                
                    const priceInputBox = document.createElement("input");
                    priceInputBox.type = "text";
                    priceInputBox.value = beer.price;
                    priceInputBox.className = "beer-price-input";

                    const quantityInputBox = document.createElement("input");
                    quantityInputBox.type = "text";
                    quantityInputBox.value = beer.stock;
                    quantityInputBox.className = "beer-stock-input";
                
                    // Replace beerName with inputBox
                    column.replaceChild(beerNameInputBox, beerName);
                    column.replaceChild(priceInputBox, priceParagraph);
                    column.replaceChild(quantityInputBox, QuantityParagraph);
                    
                    // Hide edit button
                    editButton.style.display = "none";

                    const saveButton = document.createElement("button");
                    saveButton.textContent = "SAVE";
                    saveButton.className = "beer-save-button";
                    column.appendChild(saveButton);

                    beerNameInputBox.focus();

                    saveButton.onclick = function() {
                        beer.name = beerNameInputBox.value;
                        beer.price = parseFloat(priceInputBox.value);
                        beer.stock = parseFloat(quantityInputBox.value);
                    
                        beerName.textContent = beer.name; 
                        priceParagraph.textContent = beer.price + " " + "Kr";
                        QuantityParagraph.textContent = beer.stock;
                    
                        column.replaceChild(beerName, beerNameInputBox);
                        column.replaceChild(priceParagraph, priceInputBox);
                        column.replaceChild(QuantityParagraph, quantityInputBox);
                    
                        editButton.style.display = "inline";
                        column.removeChild(saveButton);
                    };
                };
                        
                // Append all elements to the single column
                column.appendChild(beerName);
                column.appendChild(priceParagraph);
                column.appendChild(QuantityParagraph);
                column.appendChild(removeButton);
                column.appendChild(refillButton);
                column.appendChild(minusButton);
                column.appendChild(quantitySpan);
                column.appendChild(addButton);
                column.appendChild(editButton);
        
                // Append the single column to the row
                beerRow.appendChild(column);

                if (beer.stock < 30) {
                    const lowStockItems = document.getElementById("lowStockItem");
                    lowStock += beer.name + ", ";
                    lowStockItems.textContent = lowStock;
                }
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
        
                // Single column for drink name, price, and quantity
                const column = document.createElement("td");
        
                // Drink name
                const wineName = document.createElement("h2");
                wineName.textContent = wine.name;
                wineName.className = "beer-name-column"
        
                // Price
                const priceParagraph = document.createElement("p");
                priceParagraph.textContent = wine.price + " " + "Kr";
                priceParagraph.className = "beer-price-column"

                // Quantity
                const QuantityParagraph = document.createElement("p");
                QuantityParagraph.textContent = wine.stock;
                QuantityParagraph.className = "beer-price-stock"

                // Remove Button
                const removeButton = document.createElement("button");
                removeButton.className = "beer-remove-button";
                removeButton.textContent = "REMOVE";
                removeButton.onclick = function() {
                    const rowToRemove = this.parentNode.parentNode; // tr element
                    rowToRemove.remove();
                };
                

                // Refill Button
                const refillButton = document.createElement("button");
                refillButton.className = "beer-refill-button";
                refillButton.textContent = "REFILL";
                refillButton.onclick = function() {
                    const refillAmount = parseInt(quantitySpan.textContent);
                    let currentAmount = parseInt(QuantityParagraph.textContent);

                    currentAmount += refillAmount;
                    QuantityParagraph.textContent = currentAmount.toString();
                }

                // Quantity buttons
                const quantitySpan = document.createElement("span");
                quantitySpan.textContent = "0";
                quantitySpan.id = wine.name + "-quantity-value"
        
                const minusButton = document.createElement("button");
                minusButton.className = "minus-button";
                minusButton.alt = "Minus";
                minusButton.onclick = function() {
                    const quantitySpan = document.getElementById(wine.name + "-quantity-value");
                    let quantity = parseInt(quantitySpan.textContent);
                    if (quantitySpan.textContent > 1) {
                        quantitySpan.textContent = quantity - 1;
                        refillButton.style.background = "#44BA3A";
                    }

                    else if (quantitySpan.textContent == 1 ) {
                        quantitySpan.textContent = quantity - 1;
                        refillButton.style.background = "rgba(68, 186, 58, 0.50)";
                    }
                };
        
                const addButton = document.createElement("button");
                addButton.className = "add-button";
                addButton.alt = "Add";
                addButton.onclick = function() {
                    const quantitySpan = document.getElementById(wine.name + "-quantity-value");
                    let quantity = parseInt(quantitySpan.textContent);
                    quantitySpan.textContent = quantity + 1;
                    if (quantitySpan.textContent > 0) {
                        refillButton.style.background = "#44BA3A";
                    }
                };

                const editButton = document.createElement("img");
                editButton.src = "../../assets/editButton.svg";
                editButton.style.width = "20px";
                editButton.style.height = "20px"; 
                editButton.className = "beer-edit-button"

                editButton.onclick = function() {
                    const wineNameInputBox = document.createElement("input");
                    wineNameInputBox.type = "text";
                    wineNameInputBox.value = wineName.textContent;
                    wineNameInputBox.className = "beer-name-input";
                
                    const priceInputBox = document.createElement("input");
                    priceInputBox.type = "text";
                    priceInputBox.value = wine.price;
                    priceInputBox.className = "beer-price-input";

                    const quantityInputBox = document.createElement("input");
                    quantityInputBox.type = "text";
                    quantityInputBox.value = wine.stock;
                    quantityInputBox.className = "beer-stock-input";
                
                    // Replace beerName with inputBox
                    column.replaceChild(wineNameInputBox, wineName);
                    column.replaceChild(priceInputBox, priceParagraph);
                    column.replaceChild(quantityInputBox, QuantityParagraph);
                    
                    // Hide edit button
                    editButton.style.display = "none";

                    const saveButton = document.createElement("button");
                    saveButton.textContent = "SAVE";
                    saveButton.className = "beer-save-button";
                    column.appendChild(saveButton);

                    wineNameInputBox.focus();

                    saveButton.onclick = function() {
                        wine.name = wineNameInputBox.value;
                        wine.price = parseFloat(priceInputBox.value);
                        wine.stock = parseFloat(quantityInputBox.value);
                    
                        wineName.textContent = wine.name; 
                        priceParagraph.textContent = wine.price + " " + "Kr";
                        QuantityParagraph.textContent = wine.stock;
                    
                        column.replaceChild(wineName, wineNameInputBox);
                        column.replaceChild(priceParagraph, priceInputBox);
                        column.replaceChild(QuantityParagraph, quantityInputBox);
                    
                        editButton.style.display = "inline";
                        column.removeChild(saveButton);
                    };
                };
                        
                // Append all elements to the single column
                column.appendChild(wineName);
                column.appendChild(priceParagraph);
                column.appendChild(QuantityParagraph);
                column.appendChild(removeButton);
                column.appendChild(refillButton);
                column.appendChild(minusButton);
                column.appendChild(quantitySpan);
                column.appendChild(addButton);
                column.appendChild(editButton);
        
                // Append the single column to the row
                wineRow.appendChild(column);

                if (wine.stock < 30) {
                    const lowStockItems = document.getElementById("lowStockItem");
                    lowStock += wine.name + ", ";
                    lowStockItems.textContent = lowStock;
                }
            } else {
                // If there's no beer for this cell, create an empty cell
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
        
                // Single column for drink name, price, and quantity
                const column = document.createElement("td");
        
                // Drink name
                const cocktailName = document.createElement("h2");
                cocktailName.textContent = cocktail.name;
                cocktailName.className = "beer-name-column"
        
                // Price
                const priceParagraph = document.createElement("p");
                priceParagraph.textContent = cocktail.price + " " + "Kr";
                priceParagraph.className = "beer-price-column"

                // Quantity
                const QuantityParagraph = document.createElement("p");
                QuantityParagraph.textContent = cocktail.stock;
                QuantityParagraph.className = "beer-price-stock"

                // Remove Button
                const removeButton = document.createElement("button");
                removeButton.className = "beer-remove-button";
                removeButton.textContent = "REMOVE";
                removeButton.onclick = function() {
                    const rowToRemove = this.parentNode.parentNode; // tr element
                    rowToRemove.remove();
                };
                

                // Refill Button
                const refillButton = document.createElement("button");
                refillButton.className = "beer-refill-button";
                refillButton.textContent = "REFILL";
                refillButton.onclick = function() {
                    const refillAmount = parseInt(quantitySpan.textContent);
                    let currentAmount = parseInt(QuantityParagraph.textContent);

                    currentAmount += refillAmount;
                    QuantityParagraph.textContent = currentAmount.toString();
                }

                // Quantity buttons
                const quantitySpan = document.createElement("span");
                quantitySpan.textContent = "0";
                quantitySpan.id = cocktail.name + "-quantity-value"
        
                const minusButton = document.createElement("button");
                minusButton.className = "minus-button";
                minusButton.alt = "Minus";
                minusButton.onclick = function() {
                    const quantitySpan = document.getElementById(cocktail.name + "-quantity-value");
                    let quantity = parseInt(quantitySpan.textContent);
                    if (quantitySpan.textContent > 1) {
                        quantitySpan.textContent = quantity - 1;
                        refillButton.style.background = "#44BA3A";
                    }

                    else if (quantitySpan.textContent == 1 ) {
                        quantitySpan.textContent = quantity - 1;
                        refillButton.style.background = "rgba(68, 186, 58, 0.50)";
                    }
                };
        
                const addButton = document.createElement("button");
                addButton.className = "add-button";
                addButton.alt = "Add";
                addButton.onclick = function() {
                    const quantitySpan = document.getElementById(cocktail.name + "-quantity-value");
                    let quantity = parseInt(quantitySpan.textContent);
                    quantitySpan.textContent = quantity + 1;
                    if (quantitySpan.textContent > 0) {
                        refillButton.style.background = "#44BA3A";
                    }
                };

                const editButton = document.createElement("img");
                editButton.src = "../../assets/editButton.svg";
                editButton.style.width = "20px";
                editButton.style.height = "20px"; 
                editButton.className = "beer-edit-button"

                editButton.onclick = function() {
                    const cocktailNameInputBox = document.createElement("input");
                    cocktailNameInputBox.type = "text";
                    cocktailNameInputBox.value = cocktailName.textContent;
                    cocktailNameInputBox.className = "beer-name-input";
                
                    const priceInputBox = document.createElement("input");
                    priceInputBox.type = "text";
                    priceInputBox.value = cocktail.price;
                    priceInputBox.className = "beer-price-input";

                    const quantityInputBox = document.createElement("input");
                    quantityInputBox.type = "text";
                    quantityInputBox.value = cocktail.stock;
                    quantityInputBox.className = "beer-stock-input";
                
                    // Replace beerName with inputBox
                    column.replaceChild(cocktailNameInputBox, cocktailName);
                    column.replaceChild(priceInputBox, priceParagraph);
                    column.replaceChild(quantityInputBox, QuantityParagraph);
                    
                    // Hide edit button
                    editButton.style.display = "none";

                    const saveButton = document.createElement("button");
                    saveButton.textContent = "SAVE";
                    saveButton.className = "beer-save-button";
                    column.appendChild(saveButton);

                    cocktailNameInputBox.focus();

                    saveButton.onclick = function() {
                        cocktail.name = cocktailNameInputBox.value;
                        cocktail.price = parseFloat(priceInputBox.value);
                        cocktail.stock = parseFloat(quantityInputBox.value);
                    
                        cocktailName.textContent = cocktail.name; 
                        priceParagraph.textContent = cocktail.price + " " + "Kr";
                        QuantityParagraph.textContent = cocktail.stock;
                    
                        column.replaceChild(cocktailName, cocktailNameInputBox);
                        column.replaceChild(priceParagraph, priceInputBox);
                        column.replaceChild(QuantityParagraph, quantityInputBox);
                    
                        editButton.style.display = "inline";
                        column.removeChild(saveButton);
                    };
                };
                        
                // Append all elements to the single column
                column.appendChild(cocktailName);
                column.appendChild(priceParagraph);
                column.appendChild(QuantityParagraph);
                column.appendChild(removeButton);
                column.appendChild(refillButton);
                column.appendChild(minusButton);
                column.appendChild(quantitySpan);
                column.appendChild(addButton);
                column.appendChild(editButton);
        
                // Append the single column to the row
                cocktailRow.appendChild(column);

                if (cocktail.stock < 30) {
                    const lowStockItems = document.getElementById("lowStockItem");
                    lowStock += cocktail.name + ", ";
                    lowStockItems.textContent = lowStock;
                }
            } else {
                // If there's no beer for this cell, create an empty cell
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

                // Second column -- empty column for price + stock
                const priceColumn = document.createElement("td");
                priceColumn.textContent = food.price + " " + "Kr";
                priceColumn.className = "food-price-column";

                const stockColumn = document.createElement("td");
                stockColumn.textContent = food.stock;
                stockColumn.className = "food-price-column";
                
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

                // Remove Button
                const removeButton = document.createElement("button");
                removeButton.className = "food-remove-button";
                removeButton.textContent = "REMOVE";
                removeButton.onclick = function() {
                    // Remove the entire row
                    foodRow.remove();
                };

                // Refill Button
                const refillButton = document.createElement("button");
                refillButton.className = "food-refill-button";
                refillButton.textContent = "REFILL";
                refillButton.onclick = function() {
                    const refillAmount = parseInt(quantitySpan.textContent);
                    let currentAmount = parseInt(stockColumn.textContent);

                    currentAmount += refillAmount;
                    stockColumn.textContent = currentAmount.toString();
                };

                const editButton = document.createElement("img");
                editButton.src = "../../assets/editButton.svg";
                editButton.style.width = "20px";
                editButton.style.height = "20px"; 
                editButton.className = "cocktail-edit-button"
                
                editButton.onclick = function() {
                    const foodNameInputBox = document.createElement("input");
                    foodNameInputBox.type = "text";
                    foodNameInputBox.value = foodName.textContent;
                    foodNameInputBox.className = "cocktail-name-input";

                    const priceInputBox = document.createElement("input");
                    priceInputBox.type = "text";
                    priceInputBox.value = food.price;
                    priceInputBox.className = "cocktail-price-input";

                    const quantityInputBox = document.createElement("input");
                    quantityInputBox.type = "text";
                    quantityInputBox.value = food.stock;
                    quantityInputBox.className = "cocktail-stock-input";

                    container.replaceChild(foodNameInputBox, foodName);
                    priceColumn.replaceChild(priceInputBox, priceColumn.firstChild);
                    stockColumn.replaceChild(quantityInputBox, stockColumn.firstChild);

                    editButton.style.display = "none";

                    const saveButton = document.createElement("button");
                    saveButton.textContent = "SAVE";
                    saveButton.className = "cocktail-save-button";
                    buttonColumn.appendChild(saveButton);

                    foodNameInputBox.focus();

                    saveButton.onclick = function() {
                        food.name = foodNameInputBox.value;
                        food.price = parseFloat(priceInputBox.value);
                        food.stock = parseFloat(quantityInputBox.value);
                    
                        foodName.textContent = food.name; 
                        priceColumn.textContent = food.price + " " + "Kr";
                        stockColumn.textContent = food.stock;
                    
                        container.replaceChild(foodName, foodNameInputBox);
                        priceColumn.replaceChild(document.createTextNode(food.price + " " + "Kr"), priceColumn.firstChild);
                        stockColumn.replaceChild(document.createTextNode(food.stock), stockColumn.firstChild);

                        editButton.style.display = "inline";
                        buttonColumn.removeChild(saveButton);
                    };
                }

                buttonColumn.appendChild(removeButton);
                buttonColumn.appendChild(refillButton);
                buttonColumn.appendChild(minusButton);
                buttonColumn.appendChild(quantitySpan);
                buttonColumn.appendChild(addButton);
                buttonColumn.appendChild(editButton);

                foodRow.appendChild(nameColumn);
                foodRow.appendChild(priceColumn); // This line is removed
                foodRow.appendChild(stockColumn);
                foodRow.appendChild(buttonColumn);
                
                foodTable.appendChild(foodRow);

                if (food.stock < 10) {
                    const lowStockItems = document.getElementById("lowStockItem");
                    lowStock += food.name + ", ";
                    lowStockItems.textContent = lowStock;
                    console.log(food.name);
                }
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











