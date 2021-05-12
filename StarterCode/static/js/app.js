// from data.js
var tableData = data;
// Reference to the table body
var tbody = d3.select("tbody");
// Reference to button 
var button = d3.select("#filter-btn")

// Appending data to webpage 
function table(displayData) {
    tbody.html(""); 
    displayData.forEach(function(ufoReport) {
        var row = tbody.append("tr")
        Object.entries(ufoReport).forEach(function([key,value]) {
            var cell = row.append("td");
            cell.text(value);
        })
    });
}

function click() {
    // Stops page from freshing
    d3.event.preventDefault();
    // collecting dataTime inputs 
    var inputData = d3.select("#datetime")
    var inputValue = inputData.property("value")
    console.log(inputValue)
    // Collecting data related to date input
    var filteredData = tableData.filter(person => person.datetime == inputValue);
    console.log(filteredData);
    // Displaying Table 
    table(filteredData)
}

var list = d3.select("table table-striped");

// Event listener 

button.on("click", click)
//button.on("submit", click)

// Displaying Table 
table(tableData)