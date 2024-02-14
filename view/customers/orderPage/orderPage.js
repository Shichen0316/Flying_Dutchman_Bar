
// beer Menu
const beers = [
    { name: "Cold Beer", price: "460 Kr" },
    { name: "Special Beer", price: "530 Kr" },
    { name: "Premium Beer", price: "460 Kr" },
    { name: "Brown Beer", price: "530 Kr" },
];

const table = document.getElementById("beer-table");

beers.forEach(beer => {
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
            

    const row = document.createElement("tr");

    // first column -- beer name + info button
    const nameColumn = document.createElement("td");
    const beerName = document.createElement("h2");
    beerName.textContent = beer.name;
    const infoButton = document.createElement("img");
    infoButton.src = "../../assets/infoButton.svg";
    infoButton.alt = "More Info";
    nameColumn.appendChild(beerName);
    nameColumn.appendChild(infoButton);

    // second column -- beer price
    const priceColumn = document.createElement("td");
    priceColumn.textContent = beer.price;

    // third column -- quantity buttons
    const buttonColumn = document.createElement("td");
    const minusButton = document.createElement("button");
    minusButton.className = "minus-button";
    minusButton.alt = "Minus";
    const quantitySpan = document.createElement("span");
    quantitySpan.textContent = "0";
    const addButton = document.createElement("button");
    addButton.className = "add-button";
    addButton.alt = "Add";
    buttonColumn.appendChild(minusButton);
    buttonColumn.appendChild(quantitySpan);
    buttonColumn.appendChild(addButton);

    row.appendChild(nameColumn);
    row.appendChild(priceColumn);
    row.appendChild(buttonColumn);

    table.appendChild(row);
});