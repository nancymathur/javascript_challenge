// from data.js
console.log(data);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Step 1: Loop Through `data` and console.log each  object

data.forEach((ufoData) => {
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
    });
});

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function(){
   // Select the input element and get the raw HTML node
  d3.event.preventDefault(); 
  d3.select("tbody").node().value = " ";

  tbody.html('');
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(data);

  var filteredData = data.filter(ufo => ufo.datetime === inputValue);

  console.log(filteredData); 
  
  filteredData.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
    });
});

});