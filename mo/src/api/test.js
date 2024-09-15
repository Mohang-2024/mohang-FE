import axios from "axios"

export const getAPi = async () => {
  return await axios.get("https://open.neis.go.kr/hub/hisTimetable?TYPE=JSON&ATPT_OFCDC_SC_CODE=T10&SD_SCHUL_CODE=9290079");
}