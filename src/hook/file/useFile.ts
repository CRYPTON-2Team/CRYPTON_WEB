import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import { useFileShare, useUploadFiles } from "src/queries/file/file.queries";
import { mainStore } from "src/stores/home/main/main.stores";
import { FileUploadResponse } from "src/types/file/file.types";
import CONFIG from "src/config/config.json";
import token from "src/libs/token/token";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "src/constants/token/token.constants";
import cookie from "src/libs/cookies/cookie";
import Cookies from "js-cookie";

const useFile = () => {
  const formData = new FormData();
  const [fileName, setFileName] = useState<string | undefined>("");
  const [pdf, setPdf] = useState<any>();
  const [file, setFile] = useState<File>();
  const setPdfStore = mainStore((state) => state.setPdf);

  const postFileUploadMutation = useUploadFiles();

  const onDropFile = useCallback(async (acceptFiles: File[]) => {
    //미리보기
    const file = acceptFiles[0];
    setFile(file);
    const url = URL.createObjectURL(file);
    setPdf(url);
    setPdfStore(url);
    setFileName(file.name);

    //서버 통신
    const files = acceptFiles;
    const fileArray = Array.prototype.slice.call(files);
    fileArray.forEach((file) => {
      formData.append("file", file);
    });
  }, []);

  const onDelete = () => {
    setPdf(null);
  };

  const onUpload = async () => {
    try {
      await axios
        .post<FileUploadResponse>(
          `${CONFIG.serverUrl}/file/upload`,
          {
            file: formData.get("file"),
          },
          {
            headers: {
              Authorization: `Bearer ${cookie.getCookie("accessToken")}`,
              "Content-Type": "multipart/form-data",
            },
          },
        )
        .then(async (res) => {
          console.log(res.data.data);
          if (res.data.data.uploadUrl) {
            let uploadBody;
            if (res.data.data.encryptedBuffer) {
              const binaryString = atob(res.data.data.encryptedBuffer);
              uploadBody = new Uint8Array(binaryString.length);
              for (let i = 0; i < binaryString.length; i++) {
                uploadBody[i] = binaryString.charCodeAt(i);
              }
            } else {
              uploadBody = file;
            }
            console.log(uploadBody);
            await axios.put(
              res.data.data.uploadUrl.signedUrl,
              {
                uploadBody,
                mode: "cors",
              },
              {
                headers: {
                  "Content-Type": file?.type,
                },
              },
            );

            await axios
              .post(
                `${CONFIG.serverUrl}/file/complete-upload`,
                {
                  s3Key: res.data.data.uploadUrl.s3Key,
                  fileName: fileName,
                  fileSize: file?.size,
                  metadataId: res.data.data.uploadUrl.metadataId,
                  ext: file?.name.split(".").pop(),
                  mimeType: file?.type,
                },
                {
                  headers: {
                    Authorization: `Bearer ${cookie.getCookie("accessToken")}`,
                  },
                },
              )
              .then((res) => {
                console.log(res);
              });
          }
        });
    } catch {}
  };

  const postFileShare = useFileShare();

  const onFileShare = () => {
    const params = {
      token: cookie.getCookie("accessToken")!,
    };
    postFileShare.mutate(params, {
      onSuccess: (res) => {
        console.log(res);
      },
    });
  };

  return {
    file,
    fileName,
    pdf,
    onDropFile,
    onDelete,
    onUpload,
    onFileShare,
  };
};

export default useFile;
