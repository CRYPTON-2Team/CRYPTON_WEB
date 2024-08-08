import { useCallback, useRef, useState } from "react";

const useMain = () => {
  const [fileName, setFileName] = useState<string | undefined>("");
  const [pdf, setPdf] = useState<any>();
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [item, setItem] = useState<string>("오늘");
  const onDropFile = useCallback((acceptFiles: File[]) => {
    const file = acceptFiles[0];
    const url = URL.createObjectURL(file);
    setPdf(url);
    setFileName(file.name);
  }, []);

  const onDelete = () => {
    setFileName(undefined);
  };

  const handleClicked = () => {
    setIsClicked((prev) => !prev);
  };

  const handleItemName = (i: string) => {
    setItem(i);
  };

  return {
    fileName,
    pdf,
    isClicked,
    item,
    onDropFile,
    onDelete,
    handleClicked,
    handleItemName,
  };
};

export default useMain;
