import { searchStore } from "src/stores/home/search/search.stores";
import * as S from "./style";

const Item = () => {
  const SearchValue = searchStore((state) => state.file);
  return (
    <>
      {SearchValue.map((item, idx) => (
        <S.ContentItemWrapper key={idx}>
          <S.ContetnItemMainWrapper>
            <S.SpanWrapper>
              <S.TitleSpan>
                {item.fileName.length > 6 ? item.fileName.substring(0, 20) + "..." : item.fileName}
              </S.TitleSpan>
              <S.AuthorSpan>{item.userId}</S.AuthorSpan>
            </S.SpanWrapper>
            <S.DateSpan>{item.updatedAt.substring(0, 10)}</S.DateSpan>
          </S.ContetnItemMainWrapper>
        </S.ContentItemWrapper>
      ))}
    </>
  );
};

export default Item;
