import React, { useEffect, useRef } from "react";
import * as S from "./style";
import OptionIcon from "src/assets/home/upload-complete/option.svg";
import Skeleton from "src/assets/home/upload-complete/skeleton.svg";
import useMain from "src/hook/main/useMain";

const Item = () => {
  const { myFile } = useMain();
  const firstItemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (firstItemRef.current) {
      firstItemRef.current.focus();
    }
  }, [myFile]);

  return (
    <>
      {myFile.map((item, idx) => (
        <S.ContentBoxItemWrapper
          key={idx}
          ref={idx === 0 ? firstItemRef : null} // 첫 번째 요소에 ref를 설정
          tabIndex={-1} // tabIndex로 포커스를 설정 가능하게 만듭니다
        >
          <S.ContentCoxMainItemWrapper>
            <S.BoxTitleWrapper>
              <S.BoxTitleSpan>{item.fileName}</S.BoxTitleSpan>
              <img src={OptionIcon} alt="Option icon" />
            </S.BoxTitleWrapper>
            <S.BoxContentWrapper>
              <img src={Skeleton} alt="Skeleton" />
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
