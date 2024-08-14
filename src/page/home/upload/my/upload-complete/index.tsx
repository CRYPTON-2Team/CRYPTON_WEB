import React, { useEffect, useState } from "react";
import Sidebar from "src/components/common/Sidebar";
import Header from "src/components/common/Header";
import * as S from "./style";
import RightSideBar from "../sidebar";
import Item from "./itme";
import { Data } from "./data";
import OptionIcon from "src/assets/home/upload-complete/option.svg";
import Skeleton from "src/assets/home/upload-complete/skeleton.svg";
import Option from "src/components/modal/option";
import axios from "axios";
import CONFIG from "src/config/config.json";
import cookie from "src/libs/cookies/cookie";
import { MyFile } from "src/types/file/file.types";

const UploadComplete = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [myFile, setMyFile] = useState<MyFile[]>([]);
  const [index, setIndex] = useState<number>(0);

  const OptionModal = () => {
    setModal(!modal);
  };

  const handleItemIdx = (idx: number) => {
    setIndex(idx);
  };

  const [key, setKey] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");

  const handleFileInfo = (s3: string, name: string) => {
    setKey(s3!);
    setFileName(name!);
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
      .then((res) => setMyFile(res.data.data));
  };

  useEffect(() => {
    getMyFiles();
  }, []);

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
              {myFile.map((item, idx) => (
                <>
                  <S.ContentBoxItemWrapper
                    key={idx}
                    onClick={() => {
                      handleFileInfo(item.s3Key, item.fileName);
                      handleItemIdx(idx);
                    }}
                  >
                    <S.ContentCoxMainItemWrapper>
                      <S.BoxTitleWrapper>
                        <S.BoxTitleSpan>
                          {item.fileName.length > 6 ? item.fileName.substring(0, 20) + "..." : item.fileName}
                        </S.BoxTitleSpan>
                        <img src={OptionIcon} onClick={OptionModal} />
                      </S.BoxTitleWrapper>
                      <S.BoxContentWrapper>{/* <iframe src={item.s3Url}></iframe> */}</S.BoxContentWrapper>
                      <S.BoxFooterWrapper>{item.createdAt}</S.BoxFooterWrapper>
                    </S.ContentCoxMainItemWrapper>
                  </S.ContentBoxItemWrapper>
                  {modal === true && <Option url={key} fileName={fileName} position={index} />}
                  {console.log(0 % 5)}
                </>
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
