import * as S from "./style";
import OptionIcon from "src/assets/home/upload-complete/option.svg";
import Skeleton from "src/assets/home/upload-complete/skeleton.svg";

const Item = () => {
  
  
  return (
    <S.ContentBoxItemWrapper>
      <S.ContentCoxMainItemWrapper>
        <S.BoxTitleWrapper>
          <S.BoxTitleSpan>영문학개관</S.BoxTitleSpan>
          <img src={OptionIcon} />
        </S.BoxTitleWrapper>
        <S.BoxContentWrapper>
          <img src={Skeleton} />
        </S.BoxContentWrapper>
        <S.BoxFooterWrapper>
          <span>2024.05.06</span>
        </S.BoxFooterWrapper>
      </S.ContentCoxMainItemWrapper>
    </S.ContentBoxItemWrapper>
  );
};

export default Item;
