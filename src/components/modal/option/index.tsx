
import * as S from "./style";
import CONFIG from "src/config/config.json";
import { cryptonAxios } from "src/libs/axios/customAxios";

const Option = () => {
  const FileDownLoad = async () => {
    await cryptonAxios
      .get(
        `${CONFIG.serverUrl}/file/download/{1723478166862-c213aee7-f84e-49a7-a66f-097117cce1a1-%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%90%E1%85%A9%E1%86%AB%20%E1%84%90%E1%85%B5%E1%86%B7%20%E1%84%82%E1%85%A2%E1%84%87%E1%85%AE%20MVP%E1%84%80%E1%85%AA%E1%86%AB%E1%84%85%E1%85%A7%E1%86%AB%20%E1%84%92%E1%85%AC%E1%84%8B%E1%85%B4.pdf}`
      )
      .then((res) => {
        const downloadUrl = window.URL.createObjectURL(new Blob([res.data]));

        const link = document.createElement("a");

        link.href = downloadUrl;

        link.setAttribute("download", "성공.pdf");

        document.body.appendChild(link);

        link.click();

        link.remove();
      });
  };

  return (
    <S.Wrapper>
      <S.ContentItemWrapper>
        <S.ContetnItemMainWrapper>
          <S.ArrowIcon />
          <span>연결앱</span>
        </S.ContetnItemMainWrapper>
      </S.ContentItemWrapper>
      <S.ContentItemWrapper>
        <S.ContetnItemMainWrapper onClick={FileDownLoad}>
          <S.DownLoadIcon />
          <span>다운로드</span>
        </S.ContetnItemMainWrapper>
      </S.ContentItemWrapper>
      <S.ContentItemWrapper>
        <S.ContetnItemMainWrapper>
          <S.ShareIcon />
          <span>링크복사</span>
        </S.ContetnItemMainWrapper>
      </S.ContentItemWrapper>
      <S.ContentItemWrapper>
        <S.ContetnItemMainWrapper>
          <S.ImportantIcon />
          <span>중요한 문서 추가</span>
        </S.ContetnItemMainWrapper>
      </S.ContentItemWrapper>
    </S.Wrapper>
  );
};

export default Option;
