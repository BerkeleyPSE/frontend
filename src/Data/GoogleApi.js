import gapi from 'gapi-client';

const TOKEN_PATH = 'token.json';
const key = process.env.REACT_APP_CAREERS_SHEET_KEY;

function getSheetsData(sheetId, sheetName, callback) {
  window.gapi.load('client', start(sheetId, sheetName, callback));
}

function start(sheetId, sheetName, callback) {
  return () => window.gapi.client
    .init({
      'apiKey': key,
      discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
      spreadsheetId: sheetId
    }).then(function() {
      return window.gapi.client.load("sheets", "v4", () => {
        window.gapi.client.sheets.spreadsheets.values
          .get({
            spreadsheetId: sheetId,
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

export { getSheetsData };