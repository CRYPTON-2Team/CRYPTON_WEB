import axios from "axios";
import React, { useEffect, useState } from "react";
import CONFIG from "src/config/config.json";
import cookie from "src/libs/cookies/cookie";
import token from "src/libs/token/token";
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
      // await axios
      //   .get<ProfileResponse>(`https://af8b-52-79-173-166.ngrok-free.app/auth/profile`, {
      //     "ngrok-skip-browser-warning": "true",
      //   })
      //   .then((res) => {
      //     setProfile(res.data);
      //     console.log(res.data);
      //   });
      fetch(`${CONFIG.serverUrl}/auth/profile`, {
        method: "GET",

        headers: {
          accept: "*/*",
          Authorization: `Bearer ${cookie.getCookie("accessToken")}`,
          "ngrok-skip-browser-warning": "true",
        },
      });
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
