import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { environment } from "../config/environment";

const config: AxiosRequestConfig = {
  baseURL: environment.webApi,
};
const AxiosInstance = axios.create(config);

export default AxiosInstance;
