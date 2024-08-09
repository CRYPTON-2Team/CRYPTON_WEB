import * as S from "./style";

const Option = () => {
  return (
    <S.Wrapper>
      <S.ContentItemWrapper>
        <S.ContetnItemMainWrapper>
          <S.ArrowIcon />
          <span>연결앱</span>
        </S.ContetnItemMainWrapper>
      </S.ContentItemWrapper>
      <S.ContentItemWrapper>
        <S.ContetnItemMainWrapper>
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
