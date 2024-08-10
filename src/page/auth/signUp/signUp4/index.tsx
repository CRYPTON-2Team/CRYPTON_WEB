import { authStore } from "src/stores/auth/auth.stores";
import FourthStatus from "../FourthStatus";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

const SignUp4 = () => {
  const username = authStore((state) => state.name);
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <S.MainWrapper>
        <S.SignUpTitle>{username}님의 회원가입을 축하드려요!</S.SignUpTitle>
        <FourthStatus />
        <S.ContentWrapper></S.ContentWrapper>
        <S.SignInButton onClick={() => navigate("/signin")}>로그인</S.SignInButton>
      </S.MainWrapper>
    </S.Wrapper>
  );
};

export default SignUp4;
