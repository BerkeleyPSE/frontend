import { getSheetsData } from './GoogleApi.js';

const TOKEN_PATH = 'token.json';
const key = process.env.REACT_APP_CAREERS_SHEET_KEY;
const sheetID = "1O25K6kRSB93Q8uXVfPF57MyrtEphdRS9XWVkM6js540";

const validYears = [2019, 2018, 2017, 2016, 2015];

function getCareers(type, year, callback) {
  const sheetName = `${type}-${year}`;
  getSheetsData(sheetID, sheetName, callback);
  
}

const LetterData = { getCareers, validYears}
export default LetterData;