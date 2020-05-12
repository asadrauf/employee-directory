import axios from "axios";

//making a call to ransomuser api and fetching data for only 100 emps
export default {
  getEmployee: function() {
  return axios.get("https://randomuser.me/api/?results=100");
  }
};