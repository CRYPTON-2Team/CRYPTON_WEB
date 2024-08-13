import Sidebar from "src/components/common/Sidebar";
import React from "react";
import * as S from "./style";
import Header from "src/components/common/Header";
import DropDown from "src/assets/DropDown.svg";
import More from "src/assets/More.svg";
import Share from "src/assets/share.svg";
import Download from "src/assets/download.svg";
import Star from "src/assets/common/Sidebar/star1.svg";
import Trash from "src/assets/common/Sidebar/tabler_trash.svg";
import FileSelect from "src/assets/FileSelect.svg";
import { useDropzone } from "react-dropzone";
import useMain from "src/hook/main/useMain";
import { RECENT_SORT_ELEM } from "src/constants/main/recentSort.constants";
import { mainStore } from "src/stores/home/main/main.stores";
import UploadModal from "./modal";
import useFile from "src/hook/file/useFile";
import RightSideBar from "./sidebar";
import Option from "src/components/modal/option";

const UploadMy = () => {
  const RECENT_ITEMS = [
    { title: "제목", author: "저자" },
    { title: "제목", author: "저자" },
    { title: "제목", author: "저자" },
    { title: "제목", author: "저자" },
    { title: "제목", author: "저자" },
  ];

  const { ...main } = useMain();
  const { ...file } = useFile();
  const { getRootProps, isDragActive } = useDropzone({
    onDrop: file.onDropFile,
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
                      <button onClick={main.handleModalOpen}>배포하기</button>
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
                  <iframe src={pdfLink} scrolling="no" width={190} height={"80%"} onClick={file.onDelete} />
                )}
              </div>
            </S.UploadFileWrap>
            <S.RecentFileWrap>
              <div>
                <div>
                  <h1>내가 올린 문서</h1>
                  <div style={{ display: "flex", width: "30%", position: "relative" }} onClick={main.handleClicked}>
                    <span>{main.item}</span>
                    <img src={DropDown} alt="" />
                    {main.isClicked && (
                      <div>
                        {RECENT_SORT_ELEM.map((item, idx) => (
                          <span onClick={() => main.handleItemName(item)}>{item}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <span>더보기</span>
              </div>
              <S.RecentFiles>
                {main.myFile.map((item, idx) => (
                  <>
                    <S.RecentFile
                      key={idx}
                      onClick={() => {
                        file.handleKey(item.s3Key);
                        file.handleFileName(item.fileName);
                      }}
                    >
                      <S.RecentFileTitle>
                        <span>
                          {item.fileName.length > 6 ? item.fileName.substring(0, 20) + "...." : item.fileName}
                        </span>
                        <img src={More} alt="" onClick={file.handleModalOpen} />
                      </S.RecentFileTitle>
                      <S.RecentFilePreview src={item.s3Url} />
                      <S.RecentFileFooter>
                        <span>{item.createdAt.substring(0, 10)}</span>
                      </S.RecentFileFooter>
                    </S.RecentFile>
                    {file.modalOpen && <Option url={file.key} fileName={file.fileName!} />}
                  </>
                ))}
              </S.RecentFiles>
            </S.RecentFileWrap>
          </S.FileWrap>
          <RightSideBar />
        </S.Main>
      </S.PageWrap>

      {main.modalOpen && <UploadModal onClose={main.handleModalOpen} />}
    </S.MainWrap>
  );
};

export default React.memo(UploadMy);
