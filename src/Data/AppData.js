
import { postSheetsData } from './GoogleApi.js';

const TOKEN_PATH = 'token.json';
const sheetID = "1dmMS8TULOs6F_Bp9SgQuP84gAMQklNLwoTvCrf2DIp4";

function postAppPreReg(page, callback, data) {
  const sheetName = `${page}`;
  postSheetsData(sheetID, sheetName, callback, data);
}

// bascilly splits 0-X, X-11 (zero indexed)
const fallSeasonThreshold = 7;

function getRecruitmentDates() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();

  if (month < fallSeasonThreshold) {
    return [
      ["Spring", year], 
      ["Fall", year] 
    ];
  } else {
    return [
      ["Fall", year], 
      ["Spring", year + 1] 
    ];
  }
}

export default { postAppPreReg, getRecruitmentDates };