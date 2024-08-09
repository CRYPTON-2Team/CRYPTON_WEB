import * as S from "./style";

const Setting = () => {
  return (
    <S.Wrapper>
      <S.MainWrapper>
        <S.IconWrapper>
          <S.BackIcon />
          <S.CheckIcon />
          <S.CheckIcon />
        </S.IconWrapper>
        <S.SpanWrapper>
            <S.TitleSpan>"영문학개관.pdf"의 설정</S.TitleSpan>
            <S.SettingSpan>편집자가 권한을 갖고 설정할 수 있습니다.</S.SettingSpan>
            <S.SettingSpan>뷰어 및 댓글 작성자에게 다운로드, 인쇄, 복사 옵션표시</S.SettingSpan>
        </S.SpanWrapper>
      </S.MainWrapper>
    </S.Wrapper>
  );
};

export default Setting;
