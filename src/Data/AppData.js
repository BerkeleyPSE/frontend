
import { postSheetsData } from './GoogleApi.js';

const TOKEN_PATH = 'token.json';
const sheetID = "1dmMS8TULOs6F_Bp9SgQuP84gAMQklNLwoTvCrf2DIp4";

function postAppPreReg(page, callback, data) {
  const sheetName = `${page}`;
  postSheetsData(sheetID, sheetName, callback, data);
}

export default { postAppPreReg };