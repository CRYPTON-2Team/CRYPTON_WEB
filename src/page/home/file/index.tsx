import * as S from "./style";

const Upload = () => {
  return (
    <S.Wrapper>
      <S.MainWrapper>
        <S.ContentWrapper>
          <S.Title>Crypton</S.Title>
          <S.UploadFileSpan>업로드 된 파일 수 2개</S.UploadFileSpan>
          <S.ButtonWrapper>
            <S.UploadButtonStyle htmlFor="upload" style={{}}>업로드 버튼</S.UploadButtonStyle>
            <S.UploadButton type="file" id="upload" />
            <S.DownLoadButtonStyle htmlFor="download">다운로드 버튼</S.DownLoadButtonStyle>
            <S.DownLoadButton type="file" id="download" />
          </S.ButtonWrapper>
        </S.ContentWrapper>
      </S.MainWrapper>
    </S.Wrapper>
  );
};

export default Upload;
