import axios from "axios";
import React, { useState, useCallback, useEffect } from "react";
import { useFileShare, useUploadFiles } from "src/queries/file/file.queries";
import { fileStore, mainStore } from "src/stores/home/main/main.stores";
import { FileUploadResponse } from "src/types/file/file.types";
import CONFIG from "src/config/config.json";
import token from "src/libs/token/token";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "src/constants/token/token.constants";
import cookie from "src/libs/cookies/cookie";
import Cookies from "js-cookie";
import { InfoToast, SuccessToast } from "src/libs/toast/swal";

const useFile = () => {
  const formData = new FormData();
  const [fileName, setFileName] = useState<string | undefined>("");
  const [pdf, setPdf] = useState<any>();
  const [file, setFile] = useState<File>();
  const [visible, setVisible] = useState<boolean>(true);
  const [shareEmail, setShareEmail] = useState<string>("");

  const setPdfStore = mainStore((state) => state.setPdf);
  const setFileStore = fileStore((state) => state.setFile);
  const storedFile = fileStore((state) => state.file);
  const storedFileName = fileStore((state) => state.fileName);
  const setFileNameStroe = fileStore((state) => state.setFileName);
  const fileSize = fileStore((state) => state.fileSize);
  const setFileSize = fileStore((state) => state.setFileSize);
  const mimeType = fileStore((state) => state.mimeType);
  const setMimeType = fileStore((state) => state.setMimeType);
  const metadataId = fileStore((state) => state.metadataId);
  const setMetadataId = fileStore((state) => state.setMetadtaId);

  const handleVisible = (type: boolean) => {
    setVisible(type);
  };

  const handleShareEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShareEmail(e.target.value);
  };

  const onDropFile = useCallback(async (acceptFiles: File[]) => {
    //미리보기
    const file = acceptFiles[0];
    setFile(file);

    const url = URL.createObjectURL(file);
    setPdf(url);
    setFileName(file.name);

    setPdfStore(url);
    setFileNameStroe(file.name);
    setFileSize(file.size);
    setMimeType(file.type);

    //서버 통신
    const files = acceptFiles;
    const fileArray = Array.prototype.slice.call(files);
    fileArray.forEach((file) => {
      formData.append("file", file);
      setFileStore(formData.get("file")!);
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
            file: storedFile,
          },
          {
            headers: {
              Authorization: `Bearer ${cookie.getCookie("accessToken")}`,
              "Content-Type": "multipart/form-data",
            },
          },
        )
        .then(async (res) => {
          InfoToast("파일 업로드 중...");

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
            await axios.post(
              `${CONFIG.serverUrl}/file/complete-upload`,
              {
                s3Key: res.data.data.uploadUrl.s3Key,
                fileName: storedFileName,
                fileSize: fileSize,
                metadataId: res.data.data.uploadUrl.metadataId,
                ext: storedFileName.split(".").pop(),
                mimeType: mimeType,
              },
              {
                headers: {
                  Authorization: `Bearer ${cookie.getCookie("accessToken")}`,
                },
              },
            );
          }
        })
        .then(() => SuccessToast("파일 업로드 성공!"));
    } catch {}
  };

  const postFileShare = useFileShare();

  const onFileShare = () => {
    const params = {
      fileId: metadataId,
      expiresInHours: 36000000,
      recipientEmails: shareEmail,
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
    visible,
    shareEmail,
    onDropFile,
    handleVisible,
    onDelete,
    onUpload,
    onFileShare,
    handleShareEmail,
  };
};

export default useFile;
