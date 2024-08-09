import * as S from "./style";

const Item = () => {
  return (
    <S.ContentItemWrapper>
      <S.ContetnItemMainWrapper>
        <S.SpanWrapper>
          <S.TitleSpan>물리</S.TitleSpan>
          <S.AuthorSpan>서영우</S.AuthorSpan>
        </S.SpanWrapper>
        <S.DateSpan>2024.08.09</S.DateSpan>
      </S.ContetnItemMainWrapper>
    </S.ContentItemWrapper>
  );
};

export default Item;
