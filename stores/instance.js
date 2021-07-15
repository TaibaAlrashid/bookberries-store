import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.52.29:8000",
});

export default instance;
