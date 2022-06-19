import axios from "axios";
import _ from "lodash";

const instance = axios.create({
  baseURL: process.env.REACT_APP_ENDPOINT,
  // withCredentials: true
});

instance.interceptors.response.use((response) => {
  const { data } = response;
  return response.data;
});

export default instance;
