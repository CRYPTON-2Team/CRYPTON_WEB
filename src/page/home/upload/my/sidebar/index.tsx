import * as S from "../style";
import AboutFileImg from "src/assets/AboutFileImg.svg";
import Cancle from "src/assets/close.svg";
import Avartar from "src/assets/Avatar.svg";
import useMain from "src/hook/main/useMain";
import { mainStore } from "src/stores/home/main/main.stores";
import { ABOUT_FILE_SECTIONS } from "src/constants/main/aboutFileSection.constants";
import useFile from "src/hook/file/useFile";

const RightSideBar = () => {
  const { ...main } = useMain();
  const { ...file } = useFile();

  const pdfLink = mainStore((state) => state.pdfLink);
  return (
    <S.AboutFileWrap>
      {pdfLink ? (
        <>
          <S.AboutFileHeader>
            <S.titleWrap>
              <h1>{file.fileName}</h1>
              <img src={Cancle} alt="" />
            </S.titleWrap>
            <S.ClickMenuWrap>
              {ABOUT_FILE_SECTIONS.map((item, idx) => (
                <S.ClickMenu
                  section={main.section === item ? true : false}
                  key={idx}
                  onClick={() => main.handleSection(item)}
                >
                  {item}
                </S.ClickMenu>
              ))}
            </S.ClickMenuWrap>
          </S.AboutFileHeader>
          <iframe src={pdfLink}></iframe>
          <S.AccessWrap>
            <h1>문서 권한이 있는 사용자</h1>
            <img src={Avartar} alt="" />
            <button>배포 권한 설정</button>
          </S.AccessWrap>
          <S.FileInfoWrap>
            <h1>파일 세부 정보</h1>
            <div>
              <span>크기</span>
              <p>30KB</p>
            </div>
            <div>
              <span>크기</span>
              <p>30KB</p>
            </div>{" "}
            <div>
              <span>크기</span>
              <p>30KB</p>
            </div>{" "}
            <div>
              <span>크기</span>
              <p>30KB</p>
            </div>{" "}
            <div>
              <span>크기</span>
              <p>30KB</p>
            </div>{" "}
            <div>
              <span>크기</span>
              <p>30KB</p>
            </div>{" "}
            <div>
              <span>크기</span>
              <p>30KB</p>
            </div>
          </S.FileInfoWrap>
        </>
      ) : (
        <>
          <img src={AboutFileImg} alt="" />
          <span>파일을 선택하면 세부정보가 나타나요</span>
        </>
      )}
    </S.AboutFileWrap>
  );
};

export default RightSideBar;
