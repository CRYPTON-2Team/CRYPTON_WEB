import { useCallback, useRef, useState } from "react";

const useMain = () => {
  const [fileName, setFileName] = useState<string | undefined>("");
  const [pdf, setPdf] = useState<any>();
  const onDropFile = useCallback((acceptFiles: File[]) => {
    const file = acceptFiles[0];
    const url = URL.createObjectURL(file);
    setPdf(url);
    setFileName(file.name);
  }, []);

  const onDelete = () => {
    setFileName(undefined);
  };

  return {
    fileName,
    pdf,
    onDropFile,
    onDelete,
  };
};

export default useMain;
