import gapi from 'gapi-client';

const TOKEN_PATH = 'token.json';
const key = process.env.REACT_APP_CAREERS_SHEET_KEY;

function getSheetsData(sheetId, sheetName, callback) {
  window.gapi.load('client', getData(sheetId, sheetName, callback));
}

function postSheetsData(sheetId, sheetName, callback, data) {
  window.gapi.load('client', postData(sheetId, sheetName, callback, data));
}

function getData(sheetId, sheetName, callback) {
  return () => window.gapi.client
    .init({
      'apiKey': key,
      discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
      spreadsheetId: sheetId
    }).then(() => window.gapi.client.load("sheets", "v4", () => {
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
    })).catch(function(reason) {
      console.log('Error: ' + reason.result.error.message);
    });
}


function postData(sheetId, sheetName, callback, data) {
  return () => window.gapi.client
    .init({
      'apiKey': key,
      discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
      spreadsheetId: sheetId
    }).then(() => window.gapi.client.load("sheets", "v4", () => {
      console.log("Starting...");
      window.gapi.client.sheets.spreadsheets.values
        .append({
          spreadsheetId: sheetId,
          range: sheetName,
          valueInputOption: "USER_ENTERED",
          insertDataOption: "INSERT_ROWS",
        }, {
          range: sheetName,
          majorDimension: "ROWS",
          values: data
        })
        .then(response => {console.log(response); callback(true);}
        )
        .catch(response => {console.log(response); callback(false);}
        );
    })).catch(function(reason) {
      console.log('Error: ' + reason.result.error.message);
    });
}

export { getSheetsData, postSheetsData };