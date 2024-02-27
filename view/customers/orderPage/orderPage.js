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

        for (let i = 0; i < beers.length; i += 2) {
            const beerRow = document.createElement("tr");

            for (let j = 0; j < 2; j++) {
                const beer = beers[i + j];

                if (beer) {
                    // For every beer element, 
                        // create a table row
                        // create 3 table columns
                            // first column -- beer name + info button
                                // create the column
                                // create a h2 element --> assign textContent, beer name to it
                                // create an img element --. assign src + alt to it
                                // append h2 + img button to table column

                            //second column -- beer price
                                //create the column
                                //assign textContent, beer price.
                            
                            //third column -- quantity buttons
                                //create the column
                                //create a MINUS button element --> assign classname and alt
                                //create a span element --> assign textContent to it,
                                //create an ADD button element --> assign classname and alt.
                        // append all columns to the rows + row to the table


                    // first column -- beer name + info button
                    const nameColumn = document.createElement("td");

                    const container = document.createElement("div");
                    container.className = "open-page-beer-name"

                    const beerName = document.createElement("h2");
                    beerName.textContent = beer.name;

                    const infoButton = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    infoButton.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                    infoButton.setAttribute("width", "17");
                    infoButton.setAttribute("height", "9");
                    infoButton.setAttribute("viewBox", "0 0 17 9");
                    infoButton.setAttribute("fill", "#212121");
                    infoButton.setAttribute("class", "open-page-button-svg");

                    infoButton.onclick = function() {
                        if (infoBox.style.display === "block") {
                            infoBox.style.display = "none";
                        } else {
                            infoBox.style.display = "block";
                        }
                    };

                    // Add hover effect
                    infoButton.addEventListener("mouseenter", function() {
                        path.style.transition = "fill 0.2s ease";
                        path.setAttribute("fill", "#BA0000"); // Change to the desired color on hover
                    });

                    infoButton.addEventListener("mouseleave", function() {
                        path.style.transition = "fill 0.2s ease";
                        path.setAttribute("fill", "#212121"); // Revert to the original color when not hovering
                    });

                    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    path.setAttribute("d", "M8.35238 8.83852C8.43168 8.92526 8.56832 8.92526 8.64762 8.83852L16.4211 0.334942C16.5384 0.206596 16.4473 0 16.2734 0H0.726559C0.552669 0 0.461616 0.206597 0.578942 0.334942L8.35238 8.83852Z");
                    path.setAttribute("fill", "#212121");

                    infoButton.appendChild(path);

                    container.appendChild(beerName);
                    container.appendChild(infoButton);

                    const infoBox = document.createElement("div");
                    infoBox.className = "open-page-info-box";

                    const infoProducer = document.createElement("h4");
                    const infoCountry = document.createElement("h5");
                    const infoType = document.createElement("h6");
                    const infoStrength = document.createElement("h7");
                    const infoServing = document.createElement("h8");

                    infoProducer.textContent = "Producer/ Producent/ Produzent: " + beer.producer;
                    infoCountry.textContent = "Country/ Land/ Land: " + beer.countryoforiginlandname;
                    infoType.textContent = "Type/ Typ/ Typ:: " + beer.category;
                    infoStrength.textContent = "Strength/ Styrka/ Stärke: " + beer.alcoholstrength;
                    infoServing.textContent = "Serving Size/ Serveringsstorlek/ Serviergröße: " + beer.packaging;

                    infoBox.appendChild(infoProducer);
                    infoBox.appendChild(infoCountry);
                    infoBox.appendChild(infoType);
                    infoBox.appendChild(infoStrength);
                    infoBox.appendChild(infoServing);

                    nameColumn.appendChild(container);
                    nameColumn.appendChild(infoBox)

                    // second column -- beer price
                    const priceColumn = document.createElement("td");
                    priceColumn.textContent = beer.price;

                    // third column -- quantity buttons
                    const buttonColumn = document.createElement("td");
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
                    

                    const quantitySpan = document.createElement("span");
                    quantitySpan.textContent = "0";
                    quantitySpan.id = beer.name + "-quantity-value"

                    const addButton = document.createElement("button");
                    addButton.className = "add-button";
                    addButton.alt = "Add";

                    addButton.onclick = function() {
                        const quantitySpan = document.getElementById(beer.name + "-quantity-value"); 
                    
                        let quantity = parseInt(quantitySpan.textContent);
                        if (quantity >= 0) {
                            quantitySpan.textContent = quantity + 1;
                        }
                    };

                    buttonColumn.appendChild(minusButton);
                    buttonColumn.appendChild(quantitySpan);
                    buttonColumn.appendChild(addButton);

                    beerRow.appendChild(nameColumn);
                    beerRow.appendChild(priceColumn);
                    beerRow.appendChild(buttonColumn);

                    beerTable.appendChild(beerRow);
                }

                else {
                    // If there's no beer for this cell, create an empty cell
                    const cell = document.createElement("td");
                    beerRow.appendChild(cell);
                }
            }

            beerTable.appendChild(beerRow);
        }

        for (let i = 0; i < wines.length; i += 2) {
            const wineRow = document.createElement("tr");

            for (let j = 0; j < 2; j++) {
                const wine = wines[i + j];

                if (wine) {

                    // first column -- wine name + info button
                    const nameColumn = document.createElement("td");

                    const container = document.createElement("div");
                    container.className = "open-page-wine-name"

                    const wineName = document.createElement("h2");
                    wineName.textContent = wine.name;

                    const infoButton = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    infoButton.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                    infoButton.setAttribute("width", "17");
                    infoButton.setAttribute("height", "9");
                    infoButton.setAttribute("viewBox", "0 0 17 9");
                    infoButton.setAttribute("fill", "#212121");
                    infoButton.setAttribute("class", "open-page-button-svg");

                    infoButton.onclick = function() {
                        if (infoBox.style.display === "block") {
                            infoBox.style.display = "none";
                        } else {
                            infoBox.style.display = "block";
                        }
                    };

                    // Add hover effect
                    infoButton.addEventListener("mouseenter", function() {
                        path.style.transition = "fill 0.2s ease";
                        path.setAttribute("fill", "#BA0000"); // Change to the desired color on hover
                    });

                    infoButton.addEventListener("mouseleave", function() {
                        path.style.transition = "fill 0.2s ease";
                        path.setAttribute("fill", "#212121"); // Revert to the original color when not hovering
                    });

                    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    path.setAttribute("d", "M8.35238 8.83852C8.43168 8.92526 8.56832 8.92526 8.64762 8.83852L16.4211 0.334942C16.5384 0.206596 16.4473 0 16.2734 0H0.726559C0.552669 0 0.461616 0.206597 0.578942 0.334942L8.35238 8.83852Z");
                    path.setAttribute("fill", "#212121");

                    infoButton.appendChild(path);

                    container.appendChild(wineName);
                    container.appendChild(infoButton);

                    const infoBox = document.createElement("div");
                    infoBox.className = "open-page-info-box";

                    const infoProducer = document.createElement("h4");
                    const infoYear = document.createElement("h5");
                    const infoType = document.createElement("h6");
                    const infoGrape = document.createElement("h7");
                    const infoServing = document.createElement("h8");

                    infoProducer.textContent = "Producer/ Producent/ Produzent: " + wine.producer;
                    infoYear.textContent = "Year/ År/ Jahr: " + wine.productionyear;
                    infoType.textContent = "Type/ Typ/ Typ: " + wine.captype;
                    infoGrape.textContent = "Grape/ Druva/ Traube: " + wine.name2;
                    infoServing.textContent = "Serving Size/ Serveringsstorlek/ Serviergröße: " + wine.packaging;

                    infoBox.appendChild(infoProducer);
                    infoBox.appendChild(infoYear);
                    infoBox.appendChild(infoType);
                    infoBox.appendChild(infoGrape);
                    infoBox.appendChild(infoServing);

                    nameColumn.appendChild(container);
                    nameColumn.appendChild(infoBox)

                    // second column -- wine price
                    const priceColumn = document.createElement("td");
                    priceColumn.textContent = wine.price;

                    // third column -- quantity buttons
                    const buttonColumn = document.createElement("td");
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


                    const quantitySpan = document.createElement("span");
                    quantitySpan.textContent = "0";
                    quantitySpan.id = wine.name + "-quantity-value"

                    const addButton = document.createElement("button");
                    addButton.className = "add-button";
                    addButton.alt = "Add";

                    addButton.onclick = function() {
                        const quantitySpan = document.getElementById(wine.name + "-quantity-value");

                        let quantity = parseInt(quantitySpan.textContent);
                        if (quantity >= 0) {
                            quantitySpan.textContent = quantity + 1;
                        }
                    };

                    buttonColumn.appendChild(minusButton);
                    buttonColumn.appendChild(quantitySpan);
                    buttonColumn.appendChild(addButton);

                    wineRow.appendChild(nameColumn);
                    wineRow.appendChild(priceColumn);
                    wineRow.appendChild(buttonColumn);

                    wineTable.appendChild(wineRow);
                }

                else {
                    // If there's no wine for this cell, create an empty cell
                    const cell = document.createElement("td");
                    wineRow.appendChild(cell);
                }
            }

        wineTable.appendChild(wineRow);
        }


        for (let i = 0; i < cocktails.length; i += 2) {
            const cocktailRow = document.createElement("tr");

            for (let j = 0; j < 2; j++) {
                const cocktail = cocktails[i + j];

                if (cocktail) {

                    // first column -- cocktail name + info button
                    const nameColumn = document.createElement("td");

                    const container = document.createElement("div");
                    container.className = "open-page-cocktail-name"

                    const cocktailName = document.createElement("h2");
                    cocktailName.textContent = cocktail.name;

                    const infoButton = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    infoButton.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                    infoButton.setAttribute("width", "17");
                    infoButton.setAttribute("height", "9");
                    infoButton.setAttribute("viewBox", "0 0 17 9");
                    infoButton.setAttribute("fill", "#212121");
                    infoButton.setAttribute("class", "open-page-button-svg");

                    infoButton.onclick = function() {
                        if (infoBox.style.display === "block") {
                            infoBox.style.display = "none";
                        } else {
                            infoBox.style.display = "block";
                        }
                    };

                    // Add hover effect
                    infoButton.addEventListener("mouseenter", function() {
                        path.style.transition = "fill 0.2s ease";
                        path.setAttribute("fill", "#BA0000"); // Change to the desired color on hover
                    });

                    infoButton.addEventListener("mouseleave", function() {
                        path.style.transition = "fill 0.2s ease";
                        path.setAttribute("fill", "#212121"); // Revert to the original color when not hovering
                    });

                    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    path.setAttribute("d", "M8.35238 8.83852C8.43168 8.92526 8.56832 8.92526 8.64762 8.83852L16.4211 0.334942C16.5384 0.206596 16.4473 0 16.2734 0H0.726559C0.552669 0 0.461616 0.206597 0.578942 0.334942L8.35238 8.83852Z");
                    path.setAttribute("fill", "#212121");

                    infoButton.appendChild(path);

                    container.appendChild(cocktailName);
                    container.appendChild(infoButton);

                    const infoBox = document.createElement("div");
                    infoBox.className = "open-page-info-box";

                    const infoContents = document.createElement("h4");
                    const infoStrength = document.createElement("h5");
                    const infoServing = document.createElement("h6");


                    infoContents.textContent = "Contents/ Innehåll/ Inhalt: " + cocktail.ingredients;
                    infoStrength.textContent = "Strength/ Styrka/ Stärke: " + cocktail.alcoholstrength;
                    infoServing.textContent = "Serving Size/ Serveringsstorlek/ Serviergröße: " + cocktail.packaging;

                    infoBox.appendChild(infoContents);
                    infoBox.appendChild(infoStrength);
                    infoBox.appendChild(infoServing);

                    nameColumn.appendChild(container);
                    nameColumn.appendChild(infoBox)

                    // second column -- cocktail price
                    const priceColumn = document.createElement("td");
                    priceColumn.textContent = cocktail.price;

                    // third column -- quantity buttons
                    const buttonColumn = document.createElement("td");
                    const minusButton = document.createElement("button");
                    minusButton.className = "minus-button";
                    minusButton.alt = "Minus";

                    minusButton.onclick = function() {
                        const quantitySpan = document.getElementById(cocktail.name + "-quantity-value");

                        let quantity = parseInt(quantitySpan.textContent);
                        if (quantity > 0) {
                            quantitySpan.textContent = quantity - 1;
                        }
                    };


                    const quantitySpan = document.createElement("span");
                    quantitySpan.textContent = "0";
                    quantitySpan.id = cocktail.name + "-quantity-value"

                    const addButton = document.createElement("button");
                    addButton.className = "add-button";
                    addButton.alt = "Add";

                    addButton.onclick = function() {
                        const quantitySpan = document.getElementById(cocktail.name + "-quantity-value");

                        let quantity = parseInt(quantitySpan.textContent);
                        if (quantity >= 0) {
                            quantitySpan.textContent = quantity + 1;
                        }
                    };

                    buttonColumn.appendChild(minusButton);
                    buttonColumn.appendChild(quantitySpan);
                    buttonColumn.appendChild(addButton);

                    cocktailRow.appendChild(nameColumn);
                    cocktailRow.appendChild(priceColumn);
                    cocktailRow.appendChild(buttonColumn);

                    cocktailTable.appendChild(cocktailRow);
                }

                else {
                    // If there's no cocktail for this cell, create an empty cell
                    const cell = document.createElement("td");
                    cocktailRow.appendChild(cell);
                }
            }

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
                priceColumn.textContent = food.price; // This line is removed

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

// redirect to Pages
function redirectCheck() {
    window.location.href = "/view/customers/checkPage/checkPage.html";
}

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









