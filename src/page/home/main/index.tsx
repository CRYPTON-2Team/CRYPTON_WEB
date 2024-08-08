import Sidebar from "src/components/common/Sidebar";
import * as S from "./style";
import Header from "src/components/common/Header";
import DropDown from "src/assets/DropDown.svg";
import More from "src/assets/More.svg";
import BookMark from "src/assets/bookmark.svg";
import Share from "src/assets/share.svg";
import Download from "src/assets/download.svg";
import AboutFileImg from "src/assets/AboutFileImg.svg";
import { useDropzone } from "react-dropzone";
import useMain from "src/hook/main/useMain";

const Main = () => {
  const RECENT_ITEMS = [
    { title: "제목", author: "저자" },
    { title: "제목", author: "저자" },
    { title: "제목", author: "저자" },
    { title: "제목", author: "저자" },
    { title: "제목", author: "저자" },
  ];
  const { fileRef, fileName, pdf, onDropFile } = useMain();
  const { getRootProps, isDragActive, fileRejections } = useDropzone({
    onDrop: onDropFile,
    accept: {
      "application/pdf": [".pdf"],
    },
  });
  return (
    <S.MainWrap>
      <Sidebar />
      <S.PageWrap>
        <Header />
        <S.Main>
          <S.FileWrap>
            <S.UploadFileWrap>
              <h1>문서를 보다 안전하게 공유하세요.</h1>
              <div {...getRootProps()}>
                <embed src={pdf} /> {/* 좀 느림 ㅠ */}
                <span>{fileName}</span>
                {isDragActive ? <p>여기에 놓아주세요.</p> : <p>PDF파일을 드롭하세요.</p>}
              </div>
            </S.UploadFileWrap>
            <S.RecentFileWrap>
              <div>
                <div>
                  <h1>최근 문서</h1>
                  <span>오늘</span>
                  <img src={DropDown} alt="" />
                </div>
                <span>더보기</span>
              </div>
              <S.RecentFiles>
                {RECENT_ITEMS.map((item, idx) => (
                  <div key={idx}>
                    <div>
                      <span>{item.title}</span>
                      <img src={More} alt="" />
                    </div>
                    <div></div>
                    <div>
                      <span>{item.author}</span>
                      <img src={BookMark} alt="" />
                    </div>
                  </div>
                ))}
              </S.RecentFiles>
            </S.RecentFileWrap>
            <S.WeeklyWrap>
              <div>
                <h1>주간 인기 TOP5</h1>
                <span>더보기</span>
              </div>
              <S.WeeklyFile>
                <div>01</div>
                <S.WeeklyInfoWrap>
                  <h1>교재명</h1>
                  <div>
                    <span>저자명</span>
                    <span>저자명</span>
                    <span>저자명</span>
                    <span>저자명</span>
                    <span>저자명</span>
                    <span>저자명</span>
                    <span>저자명</span>
                  </div>
                </S.WeeklyInfoWrap>
                <S.WeeklySettingWrap>
                  <img src={Share} alt="" />
                  <img src={Download} alt="" />
                  <img src={BookMark} alt="" />
                </S.WeeklySettingWrap>
              </S.WeeklyFile>
            </S.WeeklyWrap>
          </S.FileWrap>
          <S.AboutFileWrap>
            <img src={AboutFileImg} alt="" />
            <span>파일을 선택하면 세부정보가 나타나요</span>
          </S.AboutFileWrap>
        </S.Main>
      </S.PageWrap>
    </S.MainWrap>
  );
};

export default Main;
