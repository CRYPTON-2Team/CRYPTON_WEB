import useSignin from "src/hook/auth/signin/useSignin";
import * as S from "./style";
import NoneCheck from "src/assets/auth/signIn/NoneCheck.svg";
import Checked from "src/assets/auth/signIn/Checked.svg";

const SignIn = () => {
  const { SigninData, isChecked, handleSigninData, handleChecked, onLogin } = useSignin();
  return (
    <S.Wrapper>
      <S.MainWrapper>
        <S.InputWrapper>
          <S.EmainInput placeholder="이메일" name="email" value={SigninData.email} onChange={handleSigninData} />
          <S.PasswordInput
            placeholder="비밀번호를 입력해주세요"
            name="password"
            value={SigninData.password}
            onChange={handleSigninData}
          />
        </S.InputWrapper>
        <S.SignInMainKeep>
          <img src={isChecked ? Checked : NoneCheck} alt="" onClick={handleChecked} />
          <S.LoginKeepSpan>로그인상태유지</S.LoginKeepSpan>
        </S.SignInMainKeep>
        <S.SignInButton onClick={onLogin}>로그인</S.SignInButton>
        <S.SearchSpanWrapper>
          <S.SearchSpan>비밀번호 찾기</S.SearchSpan>
          <hr />
          <S.SearchSpan>아이디 찾기</S.SearchSpan>
          <hr />
          <S.SearchSpan>회원가입</S.SearchSpan>
        </S.SearchSpanWrapper>
      </S.MainWrapper>
    </S.Wrapper>
  );
};

export default SignIn;
