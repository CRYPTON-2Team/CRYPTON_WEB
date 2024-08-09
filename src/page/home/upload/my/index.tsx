import Sidebar from "src/components/common/Sidebar";
import React from "react";
import * as S from "./style";
import Header from "src/components/common/Header";
import DropDown from "src/assets/DropDown.svg";
import More from "src/assets/More.svg";
import BookMark from "src/assets/bookmark.svg";
import Share from "src/assets/share.svg";
import Download from "src/assets/download.svg";
import Star from "src/assets/common/Sidebar/star1.svg";
import Trash from "src/assets/common/Sidebar/tabler_trash.svg";
import AboutFileImg from "src/assets/AboutFileImg.svg";
import FileSelect from "src/assets/FileSelect.svg";
import { useDropzone } from "react-dropzone";
import useMain from "src/hook/main/useMain";
import { RECENT_SORT_ELEM } from "src/constants/main/recentSort.constants";
import { mainStore } from "src/stores/home/main/main.stores";
import UploadModal from "./modal";

const UploadMy = () => {
  const RECENT_ITEMS = [
    { title: "제목", author: "저자" },
    { title: "제목", author: "저자" },
    { title: "제목", author: "저자" },
    { title: "제목", author: "저자" },
    { title: "제목", author: "저자" },
  ];

  const { modalOpen, isClicked, item, onDropFile, handleClicked, handleItemName, handleModalOpen } = useMain();
  const { getRootProps, isDragActive } = useDropzone({
    onDrop: onDropFile,
    accept: {
      "application/pdf": [".pdf"],
    },
  });
  const pdfLink = mainStore((state) => state.pdfLink);
  return (
    <S.MainWrap>
      <Sidebar />
      <S.PageWrap>
        <Header />
        <S.Main>
          <S.FileWrap>
            <S.UploadFileWrap>
              <section style={{ display: "flex", gap: "7px" }}>
                <h1 style={{ width: "max-content" }}>{!pdfLink ? "문서를 안전하게 공유하세요" : "업로드 준비중"}</h1>
                {pdfLink && (
                  <section
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "89%" }}
                  >
                    <section>
                      <img src={Star} alt="" />
                      <img src={Share} alt="" />
                      <img src={Download} alt="" />
                      <img src={Trash} alt="" />
                    </section>
                    <section>
                      <button onClick={handleModalOpen}>배포하기</button>
                    </section>
                  </section>
                )}
              </section>
              <div {...getRootProps()}>
                {!pdfLink ? (
                  <>
                    <img src={FileSelect} alt="" />
                    <input type="file" style={{ display: "none" }} id="file" />
                    <label htmlFor="file">"파일 선택</label>
                    {isDragActive ? <p>여기에 놓아주세요.</p> : <p>"PDF파일을 드롭하세요."</p>}
                  </>
                ) : (
                  <iframe src={pdfLink} scrolling="no" width={190} height={"80%"} />
                )}
              </div>
            </S.UploadFileWrap>
            <S.RecentFileWrap>
              <div>
                <div>
                  <h1>최근 문서</h1>
                  <div style={{ display: "flex", width: "30%", position: "relative" }} onClick={handleClicked}>
                    <span>{item}</span>
                    <img src={DropDown} alt="" />
                    {isClicked && (
                      <div>
                        {RECENT_SORT_ELEM.map((item, idx) => (
                          <span onClick={() => handleItemName(item)}>{item}</span>
                        ))}
                      </div>
                    )}
                  </div>
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
          </S.FileWrap>
          <S.AboutFileWrap>
            <img src={AboutFileImg} alt="" />
            <span>파일을 선택하면 세부정보가 나타나요</span>
          </S.AboutFileWrap>
        </S.Main>
      </S.PageWrap>
      {modalOpen && <UploadModal onClose={handleModalOpen} />}
    </S.MainWrap>
  );
};

export default React.memo(UploadMy);
