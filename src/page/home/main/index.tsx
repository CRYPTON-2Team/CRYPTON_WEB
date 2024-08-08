import Sidebar from "src/components/common/Sidebar";
import React from "react";
import * as S from "./style";
import Header from "src/components/common/Header";

const Main = () => {
  return (
    <S.MainWrap>
      <Sidebar />
      <Header />
    </S.MainWrap>
  );
};

export default Main;
