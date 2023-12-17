import axios from "axios";

const BASE_URL = "http://10.0.2.2:8080";

const cancelToken = axios.CancelToken.source();

export default axios.create({
  cancelToken: cancelToken.token,
  baseURL: BASE_URL,
  headers: {
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "*",
  },
});
