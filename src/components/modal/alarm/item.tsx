import * as S from "./style";

const Item = () => {
  return (
    <S.ContentWrapper>
      <S.StyleDiv className="style" />
      <S.ProfileWrapper>
        <S.Profile />
        <S.ProfileLog>박이유님이 파일문서명문서를 다운로드 했습니다.</S.ProfileLog>
      </S.ProfileWrapper>
      <S.ProfileDateWrapper>
        <S.DateSpan>지금</S.DateSpan>
      </S.ProfileDateWrapper>
    </S.ContentWrapper>
  );
};

export default Item;
