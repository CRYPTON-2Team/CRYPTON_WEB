import * as S from "./style";
import FirstStatusBar from "../FirstStatus";

const SignUp1 = () => {
  return (
    <S.Wrapper>
      <S.MainWrapper>
        <S.SignUpTitle>회원가입</S.SignUpTitle>
        <FirstStatusBar />
        <S.ContentMainWrpper>
          <S.WholeUseCheckWrapper>
            <S.UseCheckBox type="checkbox" />
            <S.UseCheckSpan>이용약관 전체 동의하기</S.UseCheckSpan>
          </S.WholeUseCheckWrapper>
        </S.ContentMainWrpper>
      </S.MainWrapper>
    </S.Wrapper>
  );
};

export default SignUp1;
