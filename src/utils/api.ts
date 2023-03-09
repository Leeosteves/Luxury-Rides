import axios from "axios";

const api = axios.create({
  baseURL: "https://luxury-rides-c8c6e-default-rtdb.firebaseio.com/",
});
export default api;
