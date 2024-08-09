import { mainStore } from "src/stores/home/main/main.stores";
import { useCallback, useRef, useState } from "react";

const useMain = () => {
  const [fileName, setFileName] = useState<string | undefined>("");
  const [pdf, setPdf] = useState<any>();
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [item, setItem] = useState<string>("오늘");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const setPdfStore = mainStore((state) => state.setPdf);
  const onDropFile = useCallback((acceptFiles: File[]) => {
    const file = acceptFiles[0];
    const url = URL.createObjectURL(file);
    setPdf(url);
    setPdfStore(url);
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

  const handleModalOpen = () => {
    setModalOpen((prev) => !prev);
  };

  return {
    fileName,
    pdf,
    isClicked,
    item,
    modalOpen,
    onDropFile,
    onDelete,
    handleClicked,
    handleItemName,
    handleModalOpen,
  };
};

export default useMain;
