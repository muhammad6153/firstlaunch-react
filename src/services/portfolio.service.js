import axios from "axios";
import { apiUrl } from "helper.js";

const API_URL = apiUrl();

/*
 ** List of portfolio
 */
const fetchAll = (data) => {
  return axios.get(API_URL + "/appointment/portfolio/get-portfolio", data);
};


const PortfolioService = {
  fetchAll,
};
export default PortfolioService;
