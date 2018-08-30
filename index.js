document.addEventListener('DOMContentLoaded', function() {
  var elements = [{
      name: 'Hydrogen',
      number: 1,
      symbol: 'H'
    },
    {
      name: 'Mercury',
      number: 80,
      symbol: 'Hg'
    },
    {
      name: 'Lead',
      number: 82,
      symbol: 'Pb'
    },
    {
      name: 'Bismuth',
      number: 83,
      symbol: 'Bi'
    },
    {
      name: 'Neon',
      number: 10,
      symbol: 'Ne'
    }
  ]
})

//Add Rows for each element
//In each element, create a table head with the number
//create a table data with symbol
//create a table data with the name

//Find table body
let tableBody = document.getElementsByTagName('tbody')[0]

//Create a row element
function createRow() {
  let row = document.createElement('tr')
  return row
}

//Create a table head
let tableHead = document.createElement('th')

//create a table data
let tableData = document.createElement('td')

//Add the row in the HTML under the table body

for (var i = 0; i < 5; i++) {
  tableBody.appendChild(createRow(i))
}
