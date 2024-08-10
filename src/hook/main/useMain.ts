import { mainStore } from "src/stores/home/main/main.stores";
import { useCallback, useRef, useState } from "react";

const useMain = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [item, setItem] = useState<string>("오늘");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [section, setSection] = useState<string>("세부정보");
  const [file, setFile] = useState<File[] | File>([]);
  const formData = new FormData();

  const handleClicked = () => {
    setIsClicked((prev) => !prev);
  };

  const handleItemName = (i: string) => {
    setItem(i);
  };

  const handleModalOpen = () => {
    setModalOpen((prev) => !prev);
  };

  const handleSection = (item: string) => {
    setSection(item);
  };

  return {
    isClicked,
    item,
    modalOpen,
    section,
    handleClicked,
    handleItemName,
    handleModalOpen,
    handleSection,
  };
};

export default useMain;
