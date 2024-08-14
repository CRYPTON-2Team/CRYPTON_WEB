import * as S from "./style";
import CONFIG from "src/config/config.json";
import axios from "axios";

interface OptionProps {
  url: string;
  fileName: string;
}

const Option = ({ url, fileName }: OptionProps) => {
  const FileDownLoad = async (url: string) => {
    await axios.get(`${CONFIG.serverUrl}/file/download/${url}`).then((res) => {
      const downloadUrl = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.setAttribute("download", `${fileName}`);
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
