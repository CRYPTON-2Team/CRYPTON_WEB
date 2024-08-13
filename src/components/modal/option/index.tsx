import axios from "axios";
import * as S from "./style";
import CONFIG from "src/config/config.json";
import cookies from "src/libs/cookies/cookie";
import { cryptonAxios } from "src/libs/axios/customAxios";

interface OptionProps {
  url: string;
  fileName: string;
}

const Option = ({ url, fileName }: OptionProps) => {
  const FileDownLoad = async (url: string) => {
    await axios.get(`${CONFIG.serverUrl}/file/download/${url}`).then((res) => {
      const downloadUrl = window.URL.createObjectURL(new Blob([res.data]));
      // 서버에서 받은 응답 데이터를 Blob 객체로 감싸고, 그 객체를 사용하여 다운로드할 수 있는 URL 생성

      const link = document.createElement("a");
      // 'a' 요소를 생성하여 link라는 이름의 상수에 할당 (이 요소는 다운로드 링크를 나타냄)

      link.href = downloadUrl;
      // 'a' 요소의 href 속성을 다운로드할 URL인 downloadUrl로 설정

      link.setAttribute("download", `${fileName}`);
      // 'a' 요소의 download 속성을 설정하여 파일 이름을 지정

      document.body.appendChild(link);
      // 'a' 요소를 문서의 본문(body)에 추가

      link.click();
      // 'a' 요소를 클릭하여 다운로드를 시작

      link.remove();
      // 'a' 요소를 문서에서 제거
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
        <S.ContetnItemMainWrapper onClick={() => FileDownLoad(url)}>
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
