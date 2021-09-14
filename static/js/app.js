// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// code to build out table
function buildTable(data) {
    //clear any existing data in table
    tbody.html("");
    // loop through each object in the data 
    //& append row and cells for each value in row
    data.forEach((dataRow) => {
        //add row to table body
        let row = tbody.append("tr");
        //loop through each field in dataRow and add
        //each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
};

//handle click actions
function handleClick() {
    //looking for date time tags in html
    let date = d3.select("#datetime").property("value");
    //setting filteredData to raw data as default
    let filteredData = tableData;
    //filtering based on date selected by user
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    //build table using previous function anf filtered data
    buildTable(filteredData);
};

//listen for event click
d3.selectAll("#filter-btn").on("click", handleClick);

//build default table with raw data when page loads
buildTable(tableData);