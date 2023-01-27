const fs = require("fs");
const xlsx = require("xlsx");
const jsontoxml = require("jsontoxml");

const workbook = xlsx.readFile("User_Login_Database.xlsx");

let worksheets = {};

for(const sheetName of workbook.sheetNames) {
    worksheets[sheetName] = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
}

console.log("json:\n", JSON.stringify(worksheets.sheet1), "\n\n");