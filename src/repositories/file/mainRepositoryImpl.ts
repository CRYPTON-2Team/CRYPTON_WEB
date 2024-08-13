import { FileUploadResponse, shareParams } from "src/types/file/file.types";
import { MainRepository } from "./mainRepository";
import { cryptonAxios } from "src/libs/axios/customAxios";
import axios from "axios";
import token from "src/libs/token/token";
import CONFIG from "src/config/config.json";
import { ACCESS_TOKEN_KEY } from "src/constants/token/token.constants";
import cookie from "src/libs/cookies/cookie";

class MainRepositoryImpl implements MainRepository {
  public async upload(uploadParams: FormData): Promise<FileUploadResponse> {
    const { data } = await axios.post(`${CONFIG.serverUrl}/file/upload`, uploadParams, {
      headers: {
        "Content-Type": "mutipart/form-data",
      },
    });
    return data;
  }

  public async fileShare(shareParams: shareParams): Promise<void> {
    const { fileId, recipientEmails, expiresInHours } = shareParams;
    await cryptonAxios.post(
      `${CONFIG.serverUrl}/file-share`,
      {
        fileId: fileId,
        expiresInHours: expiresInHours,
        recipientEmails: recipientEmails,
      },
      {
        headers: {
          Authorization: `Bearer ${cookie.getCookie("accessToken")}`,
        },
      },
    );
  }
}

export default new MainRepositoryImpl();
