import { useState, useCallback } from "react";
import { useUploadFiles } from "src/queries/file/file.queries";
import { mainStore } from "src/stores/home/main/main.stores";
import { FileUploadResponse } from "src/types/file/file.types";

const useFile = () => {
  const formData = new FormData();
  const [fileName, setFileName] = useState<string | undefined>("");
  const [pdf, setPdf] = useState<any>();
  const [fileInfo, setFileInfo] = useState<FileUploadResponse>({
    key: "",
    encryptedBuffer: "",
    uploadUrl: "",
  });
  const setPdfStore = mainStore((state) => state.setPdf);

  const postFileUploadMutation = useUploadFiles();

  const onDropFile = useCallback((acceptFiles: File[]) => {
    //미리보기
    const file = acceptFiles[0];
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

    const params = {
      file: formData,
    };

    postFileUploadMutation.mutate(formData, {
      onSuccess: (res) => {
        setFileInfo(res);
      },
    });
  }, []);

  return {
    fileName,
    pdf,
    onDropFile,
  };
};

export default useFile;
