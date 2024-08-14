import { mainStore } from "src/stores/home/main/main.stores";
import { useCallback, useEffect, useRef, useState } from "react";
import { MyFile } from "src/types/file/file.types";
import axios from "axios";
import CONFIG from "src/config/config.json";
import cookie from "src/libs/cookies/cookie";
import { searchStore } from "src/stores/home/search/search.stores";
const useMain = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [item, setItem] = useState<string>("오늘");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [section, setSection] = useState<string>("세부정보");
  const [myFile, setMyFile] = useState<MyFile[]>([]);

  const setSearchStore = searchStore((state) => state.setFile);

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

  const getMyFiles = async () => {
    await axios
      .get(`${CONFIG.serverUrl}/file/my-file`, {
        headers: {
          accept: "*/*",
          Authorization: `Bearer ${cookie.getCookie("accessToken")}`,
          "ngrok-skip-browser-warning": "true",
        },
      })
      .then((res) => {
        setSearchStore(res.data.data);
        setMyFile(res.data.data);
      });
  };

  useEffect(() => {
    getMyFiles();
  }, []);

  return {
    isClicked,
    item,
    modalOpen,
    section,
    myFile,
    handleClicked,
    handleItemName,
    handleModalOpen,
    handleSection,
  };
};

export default useMain;
