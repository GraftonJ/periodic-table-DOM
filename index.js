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
  //Start my functions and variables

  //Find table body
  let tableBody = document.getElementsByTagName('tbody')[0]

  //Create a row element
  function createRow() {
    let row = document.createElement('tr')
    return row
  }

  //Create table data elements
  function createTD() {
    let tableData = document.createElement('td')
    return tableData
  }

  //Create table head elements
  function createTH() {
    let tableHead = document.createElement('th')
    return tableHead
  }

  //Add Rows for each element under table body
  for (var i = 0; i < 5; i++) {
    tableBody.appendChild(createRow(i))
    let tableRow = document.getElementsByTagName('tr')[i + 1]
    tableRow.appendChild(createTH(i)).innerText = elements[i]['number']
    tableRow.appendChild(createTD(i)).innerText = elements[i]['symbol']
    tableRow.appendChild(createTD(i)).innerText = elements[i]['name']
  }
})

//In each element, create a table head with the number
//create a table data with symbol
//create a table data with the name

//Find table body
// let tableBody = document.getElementsByTagName('tbody')[0]
//
// //Create a row element
// function createRow() {
//   let row = document.createElement('tr')
//   return row
// }
//
// //Create table data elements
// function createTD() {
//   let tableData = document.createElement('td')
//   return tableData
// }
//
// //Create table head elements
// function createTH() {
//   let tableHead = document.createElement('th')
//   return tableHead
// }
//
// //Add Rows for each element under table body
// for (var i = 0; i < 5; i++) {
//   tableBody.appendChild(createRow(i))
//   let tableRow = document.getElementsByTagName('tr')[i + 1]
//   tableRow.appendChild(createTH(i)).innerText = "hope this works"
//   tableRow.appendChild(createTD(i)).innerText = 'Table data'
//   tableRow.appendChild(createTD(i)).innerText = 'Table data2'
//
// }
