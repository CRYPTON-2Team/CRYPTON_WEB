import axios from "axios";
import React, { useCallback, useState } from "react";
import { authStore } from "src/stores/auth/auth.stores";
import { SignpupType } from "src/types/auth/auth.types";
import CONFIG from "src/config/config.json";
import { useNavigate } from "react-router-dom";

const useSignup = () => {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState<SignpupType>({
    email: "",
    password: "",
    passwordCheck: "",
    name: "",
    id: "",
    birth: "",
    authCode: "",
  });
  const email = authStore((state) => state.email);
  const name = authStore((state) => state.name);
  const setEmailStore = authStore((state) => state.setEmail);
  const setNameStore = authStore((state) => state.setName);

  const handleSignupData = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmailStore(value);
    }

    if (name === "name") {
      setNameStore(value);
    }
    setSignupData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const onGetAuthCode = async () => {
    //서버 기능 구현중,
  };

  const onGetIsDuplicatedId = () => {
    //서버 기능 구현중
  };

  const onSignup = async () => {
    const { password } = signupData;
    try {
      await axios
        .post(`${CONFIG.serverUrl}/auth/register`, {
          email: email,
          username: name,
          password: password,
          profileImgUrl: null,
        })
        .then(() => navigate("/signup4"));
    } catch {}
  };

  return {
    signupData,
    handleSignupData,
    onSignup
  };
};

export default useSignup;
