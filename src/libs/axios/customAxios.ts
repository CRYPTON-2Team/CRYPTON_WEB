import axios, { AxiosRequestConfig } from "axios";
import CONFIG from "src/config/config.json";
import { ACCESS_TOKEN_KEY, REQUEST_TOKEN_KEY } from "src/constants/token/token.constants";
import token from "../token/token";
import ResponseHandler from "./responseHandler";
import requestHandler from "./requestHandler";
import Token from "src/libs/token/token";

const createAxiosInstance = (config?: AxiosRequestConfig) => {
  const ACCESS_TOKEN = Token.getToken(ACCESS_TOKEN_KEY);
  const baseConfig: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  };
  return axios.create({
    ...baseConfig,
    ...config,
  });
};

export const cryptonAxios = createAxiosInstance({
  baseURL: CONFIG.serverUrl,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`,
  },
});

export const cryptonAxiosSetAccessToken = (newToken: string) => {
  cryptonAxios.defaults.headers.common[REQUEST_TOKEN_KEY] = `Bearer ${newToken}`;
};

cryptonAxios.interceptors.request.use(requestHandler as any, (response) => response);
cryptonAxios.interceptors.response.use((response) => response, ResponseHandler);
