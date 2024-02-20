//Fetching Data from JSON

var beers;

fetch("../../../../models/database/DrinksStock.json")
    .then(response => response.json())
    .then(data => {
        beers = data.beers;
        processBeersData();

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

                    const infoIngredients = document.createElement("h4");
                    const infoAlcohol = document.createElement("h5");
                    const infoTannin = document.createElement("h6");

                    infoIngredients.textContent = "Ingredients: " + beer.ingredients;
                    infoAlcohol.textContent = "Alcohol %: " + beer.alcoholstrength;
                    infoTannin.textContent = "Tannin: " + beer.tannin;

                    infoBox.appendChild(infoIngredients);
                    infoBox.appendChild(infoAlcohol);
                    infoBox.appendChild(infoTannin);

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

// Menus
// const beers = [

//     { name: "Cold Beer", 
//         price: "460 Kr", 
//         ingredients: "Water, Malted Barley, Hops, Yeast", 
//         alchoholPercentage: "4", 
//         tannin: "Low" },
//     { name: "Special Beer", 
//         price: "530 Kr", 
//         ingredients: "Water, Malted Barley, Hops, Yeast", 
//         alchoholPercentage: "6", 
//         tannin: "Low"  },
//     { name: "Premium Beer", 
//         price: "460 Kr", 
//         ingredients: "Water, Malted Barley, Caramel Malt, Hops, Yeast", 
//         alchoholPercentage: "6", 
//         tannin: "Low" },
//     { name: "Brown Beer", 
//         price: "530 Kr", 
//         ingredients: "Water, Malted Barley, Hops, Yeast, Orange peel, Coriander seeds", 
//         alchoholPercentage: "8", 
//         tannin: "Moderate" },
// ];

const wines = [
    { name: "Wine1", price: "Price1"},
    { name: "Wine2", price: "Price2"},
    { name: "Wine3", price: "Price3"},
    { name: "Wine4", price: "Price4"}
]

const cocktails = [
    { name: "Cocktail1", price: "Price1"},
    { name: "Cocktail2", price: "Price2"},
    { name: "Cocktail3", price: "Price3"},
    { name: "Cocktail4", price: "Price4"}
]

// redirect to Pages
function redirectCheck() {
    window.location.href = "/view/customers/checkPage/checkPage.html";
}