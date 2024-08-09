import FourthStatus from "../FourthStatus";
import * as S from "./style";

const SignUp4 = () => {
  return (
    <S.Wrapper>
      <S.MainWrapper>
        <S.SignUpTitle>00님의 회원가입을 축하드려요!</S.SignUpTitle>
        <FourthStatus />
        <S.ContentWrapper></S.ContentWrapper>

        <S.SignInButton>로그인</S.SignInButton>
      </S.MainWrapper>
    </S.Wrapper>
  );
};

export default SignUp4;
