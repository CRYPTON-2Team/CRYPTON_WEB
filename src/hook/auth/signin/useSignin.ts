import { ACCESS_TOKEN_KEY } from "src/constants/token/token.constants";
import { cryptonAxios } from "src/libs/axios/customAxios";
import token from "src/libs/token/token";
import { SigninType } from "src/types/auth/auth.types";
import React, { useCallback, useState } from "react";
import CONFIG from "src/config/config.json";
import { SuccessToast, ErrorToast } from "src/libs/toast/swal";
import axios from "axios";

const useSignin = () => {
  const [SigninData, setSigninData] = useState<SigninType>({
    email: "",
    password: "",
  });
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleChecked = () => {
    setIsChecked((prev) => !prev);
  };

  const handleSigninData = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setSigninData((prev) => ({ ...prev, [name]: value }));
    },
    [SigninData],
  );

  const onLogin = () => {
    const { email, password } = SigninData;
    axios.post("http://52.79.173.166:3000/auth/login", {
      email,
      password,
    });
  };

  return {
    SigninData,
    isChecked,
    handleSigninData,
    handleChecked,
    onLogin,
  };
};

export default useSignin;
