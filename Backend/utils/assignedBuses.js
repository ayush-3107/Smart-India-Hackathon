// csv-to-json.js
const fs = require('fs');
const path = require('path');
const Papa = require('papaparse');

// Read the CSV file
fs.readFile(path.join(__dirname, 'assigned_buses.csv'), 'utf8', (err, csvData) => {
  if (err) throw err;

  // Parse CSV data
  Papa.parse(csvData, {
    header: true,
    skipEmptyLines: true,
    complete: (results) => {
      // Write JSON data to file
      fs.writeFileSync(
        path.join(__dirname, 'data.json'),
        JSON.stringify(results.data, null, 2)
      );
      console.log('CSV converted to JSON and saved as data.json');
    }
  });
});
