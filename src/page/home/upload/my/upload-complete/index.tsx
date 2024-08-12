import React from "react";
import Sidebar from "src/components/common/Sidebar";
import Header from "src/components/common/Header";
import * as S from "./style";
import RightSideBar from "../sidebar";
import Item from "./itme";

const UploadComplete = () => {
  return (
    <S.MainWrap>
      <Sidebar />
      <S.PageWrap>
        <Header />
        <S.Main>
          <S.ContentWrap>
            <S.ContentTitleWrap>
              <S.TitleSpan>내가 올린 문서</S.TitleSpan>
              <S.TitleItemWrapper>
                <S.Star />
                <S.Share />
                <S.DownLoad />
                <S.Trash />
              </S.TitleItemWrapper>
            </S.ContentTitleWrap>
            <S.BoxWrapper>
              <Item />
            </S.BoxWrapper>
          </S.ContentWrap>
          <RightSideBar />
        </S.Main>
      </S.PageWrap>
    </S.MainWrap>
  );
};

export default UploadComplete;
