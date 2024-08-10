import useSignup from "src/hook/auth/signup/useSignup";
import SecondStatus from "../SecondStatus";
import * as S from "./style";

import { useNavigate } from "react-router-dom";

const SignUp2 = () => {
  const navigate = useNavigate();

  const BackNav = () => {
    navigate(-1);
  };

  const NextNav = () => {
    navigate("/signup3");
  };

  const { signupData, handleSignupData } = useSignup();
  return (
    <S.Wrapper>
      <S.MainWrapper>
        <S.SignUpTitle>회원가입</S.SignUpTitle>
        <SecondStatus />
        <S.ContentWrapper>
          <S.EmailWrapper>
            <S.EmailContentInput placeholder="이메일" name="email" value={signupData.email} onChange={handleSignupData} />
            <S.EmailButton>인증</S.EmailButton>
          </S.EmailWrapper>
          <S.EmailWrapper>
            <S.EmailContentInput placeholder="이메일로 받은 번호를 입력해주세요" name="authCode" value={signupData.authCode} onChange={handleSignupData} />
            <S.ReEmailButton>재인증</S.ReEmailButton>
          </S.EmailWrapper>
          <S.ContentInput placeholder="이름" name="name" value={signupData.name} onChange={handleSignupData} />
          <S.ContentInput placeholder="생년월일" name="birth" value={signupData.birth} onChange={handleSignupData} />
        </S.ContentWrapper>
        <S.ButtonWrapper>
          <S.BackButton onClick={BackNav}>이전</S.BackButton>
          <S.SucessButton onClick={NextNav}>다음</S.SucessButton>
        </S.ButtonWrapper>
      </S.MainWrapper>
    </S.Wrapper>
  );
};

export default SignUp2;
