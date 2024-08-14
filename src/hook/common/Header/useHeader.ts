import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Search } from "react-router-dom";
import CONFIG from "src/config/config.json";
import cookie from "src/libs/cookies/cookie";
import token from "src/libs/token/token";
import { searchStore } from "src/stores/home/search/search.stores";
import { ProfileResponse } from "src/types/header/header.types";

const useHeader = () => {
  const [isclicked, setIsClicked] = useState<boolean>(false);
  const [item, setItem] = useState<string>("전체");
  const [keyword, setKeyword] = useState<any>({});
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

  const handleSearchKeyword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setKeyword(newValue);
    console.log("Updated keyword:", newValue);
  }, []);



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
