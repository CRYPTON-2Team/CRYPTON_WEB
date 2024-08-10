import * as S from "./style";
import ThirdStatus from "../ThirdStatus";
import { useNavigate } from "react-router-dom";
import useSignup from "src/hook/auth/signup/useSignup";

const SignUp3 = () => {
  const navigate = useNavigate();

  const BackNav = () => {
    navigate(-1);
  };

  const { signupData, handleSignupData, onSignup } = useSignup();
  return (
    <S.Wrapper>
      <S.MainWrapper>
        <S.SignUpTitle>회원가입</S.SignUpTitle>
        <ThirdStatus />
        <S.ContentWrapper>
          <S.EmailWrapper>
            <S.EmailContentInput placeholder="아이디" name="id" value={signupData.id} onChange={handleSignupData} />
            <S.EmailButton>중복확인</S.EmailButton>
          </S.EmailWrapper>
          <S.ContentInput
            placeholder="비밀번호를 입력해주세요"
            type="password"
            name="password"
            value={signupData.password}
            onChange={handleSignupData}
          />
          <S.ContentInput
            placeholder="비밀번호를 재입력해주세요"
            type="password"
            name="passwordCheck"
            value={signupData.passwordCheck}
            onChange={handleSignupData}
          />
        </S.ContentWrapper>
        <S.ButtonWrapper>
          <S.BackButton onClick={BackNav}>이전</S.BackButton>
          <S.SucessButton onClick={onSignup}>다음</S.SucessButton>
        </S.ButtonWrapper>
      </S.MainWrapper>
    </S.Wrapper>
  );
};

export default SignUp3;
