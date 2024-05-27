import axios from "axios";

const API_URL = "https://sangeet-go.onrender.com/";
// const API_URL = "http://localhost:8080/";

export default axios.create({
  baseURL: API_URL,
});
