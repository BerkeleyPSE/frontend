import { getSheetsData } from './GoogleApi.js';

const TOKEN_PATH = 'token.json';
const key = process.env.REACT_APP_CAREERS_SHEET_KEY;
const sheetID = "12stj_o9S5cDA8jLi3F-5kMbB5stusKM1E8e-SBUNBPU";

function getLetter(page, callback) {
  const sheetName = `${page}Page`;
  getSheetsData(sheetID, sheetName, callback);
  
}

const LetterData = { getLetter }
export default LetterData;