import { FileUploadResponse } from "src/types/file/file.types";
import { MainRepository } from "./mainRepository";
import { cryptonAxios } from "src/libs/axios/customAxios";
import axios from "axios";
import token from "src/libs/token/token";
import CONFIG from "src/config/config.json";
import { ACCESS_TOKEN_KEY } from "src/constants/token/token.constants";

class MainRepositoryImpl implements MainRepository {
  public async upload(uploadParams: FormData): Promise<FileUploadResponse> {
    const { data } = await axios.post(`${CONFIG.serverUrl}/file/upload`, uploadParams, {
      headers: {
        Authorization: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`,
        "Content-Type": "mutipart/form-data",
      },
    });
    return data;
  }
}

export default new MainRepositoryImpl();
