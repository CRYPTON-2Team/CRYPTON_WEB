import React from "react";
import Sidebar from "src/components/common/Sidebar";
import Header from "src/components/common/Header";
import * as S from "./style";
import RightSideBar from "../sidebar";
import Item from "./itme";
import { Data } from "./data";
import OptionIcon from "src/assets/home/upload-complete/option.svg";
import Skeleton from "src/assets/home/upload-complete/skeleton.svg";

const UploadComplete = () => {
  const pdfList = Object.values(Data[0]);

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
              {pdfList.map((item, idx) => (
                <S.ContentBoxItemWrapper key={idx}>
                  <S.ContentCoxMainItemWrapper>
                    <S.BoxTitleWrapper>
                      <S.BoxTitleSpan>{item.name}</S.BoxTitleSpan>
                      <img src={OptionIcon} />
                    </S.BoxTitleWrapper>
                    <S.BoxContentWrapper>
                      <img src={item.src} />
                    </S.BoxContentWrapper>
                    <S.BoxFooterWrapper>{item.data}</S.BoxFooterWrapper>
                  </S.ContentCoxMainItemWrapper>
                </S.ContentBoxItemWrapper>
              ))}
            </S.BoxWrapper>
          </S.ContentWrap>
          <RightSideBar />
        </S.Main>
      </S.PageWrap>
    </S.MainWrap>
  );
};

export default UploadComplete;
