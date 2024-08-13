import * as S from "./style";
import OptionIcon from "src/assets/home/upload-complete/option.svg";
import Skeleton from "src/assets/home/upload-complete/skeleton.svg";
import useMain from "src/hook/main/useMain";

const Item = () => {
  const { myFile } = useMain();
  return (
    <>
      {myFile.map((item, idx) => (
        <S.ContentBoxItemWrapper key={idx}>
          <S.ContentCoxMainItemWrapper>
            <S.BoxTitleWrapper>
              <S.BoxTitleSpan>{item.fileName}</S.BoxTitleSpan>
              <img src={OptionIcon} />
            </S.BoxTitleWrapper>
            <S.BoxContentWrapper>
              <img src={Skeleton} />
            </S.BoxContentWrapper>
            <S.BoxFooterWrapper>
              <span>{item.createdAt}</span>
            </S.BoxFooterWrapper>
          </S.ContentCoxMainItemWrapper>
        </S.ContentBoxItemWrapper>
      ))}
    </>
  );
};

export default Item;
