import gapi from 'gapi-client';

const TOKEN_PATH = 'token.json';
const key = process.env.REACT_APP_CAREERS_SHEET_KEY;
const sheetID = "1O25K6kRSB93Q8uXVfPF57MyrtEphdRS9XWVkM6js540";

function getCareers(type, year, callback) {
  const sheetName = `${type}-${year}`;
  window.gapi.load('client', start(sheetName, callback));
}

function start(sheetName, callback) {
  return () => window.gapi.client
    .init({
      'apiKey': key,
      discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
      spreadsheetId: sheetID
    }).then(function() {
      return window.gapi.client.load("sheets", "v4", () => {
        window.gapi.client.sheets.spreadsheets.values
          .get({
            spreadsheetId: sheetID,
            range: sheetName
          })
          .then(
            response => {
              const data = response.result.values;
              callback(data);
            }
          );
        })
    }).catch(function(reason) {
      console.log('Error: ' + reason.result.error.message);
    });
}

export default getCareers;