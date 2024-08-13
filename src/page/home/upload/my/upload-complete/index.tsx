import React, { useState } from "react";
import Sidebar from "src/components/common/Sidebar";
import Header from "src/components/common/Header";
import * as S from "./style";
import RightSideBar from "../sidebar";
import Item from "./itme";
import { Data } from "./data";
import OptionIcon from "src/assets/home/upload-complete/option.svg";
import Skeleton from "src/assets/home/upload-complete/skeleton.svg";
import Option from "src/components/modal/option";

const UploadComplete = () => {
  const pdfList = Object.values(Data[0]);

  const [modal, setModal] = useState<boolean>(false);
  const OptionModal = () => {
    setModal(!modal);
  };

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
              <S.ContentBoxItemWrapper>
                <S.ContentCoxMainItemWrapper>
                  <S.BoxTitleWrapper>
                    <S.BoxTitleSpan>영문어학과</S.BoxTitleSpan>
                    <img src={OptionIcon} onClick={OptionModal} />
                  </S.BoxTitleWrapper>

                  <S.BoxContentWrapper>
                    <img src={Skeleton} />
                  </S.BoxContentWrapper>
                  <S.BoxFooterWrapper>20240508</S.BoxFooterWrapper>
                </S.ContentCoxMainItemWrapper>
              </S.ContentBoxItemWrapper>
              {modal === true ? <Option></Option> : <></>}
              
            </S.BoxWrapper>
          </S.ContentWrap>
          <RightSideBar />
        </S.Main>
      </S.PageWrap>
    </S.MainWrap>
  );
};

export default UploadComplete;
