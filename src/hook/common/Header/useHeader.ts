import axios from "axios";
import React, { useEffect, useState } from "react";
import CONFIG from "src/config/config.json";
import cookie from "src/libs/cookies/cookie";
import { ProfileResponse } from "src/types/header/header.types";

const useHeader = () => {
  const [isclicked, setIsClicked] = useState<boolean>(false);
  const [item, setItem] = useState<string>("전체");
  const [keyword, setKeyword] = useState<string>("");
  const [profile, setProfile] = useState<ProfileResponse>({
    id: 0,
    username: "",
    email: "",
    role: "",
  });

  const handleClicked = () => {
    setIsClicked((prev) => !prev);
  };
  const handleItemName = (i: string) => {
    setItem(i);
  };

  const handleSearchKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const getProfile = async () => {
    try {
      await axios.get<ProfileResponse>(`${CONFIG.serverUrl}/auth/profile`).then((res) => setProfile(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return {
    isclicked,
    item,
    keyword,
    handleClicked,
    handleItemName,
    handleSearchKeyword,
    getProfile,
  };
};

export default useHeader;
