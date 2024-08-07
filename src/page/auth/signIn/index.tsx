import * as S from "./style";

const SignIn = () => {
  return (
    <S.Wrapper>
      <S.MainWrapper>
        <S.InputWrapper>
          <S.EmainInput placeholder="이메일" />
          <S.PasswordInput placeholder="비밀번호를 입력해주세요" />
        </S.InputWrapper>
        <S.SignInMainKeep>
          <S.LoginKeepCheckBox type="checkbox" />
          <S.LoginKeepSpan>로그인상태유지</S.LoginKeepSpan>
        </S.SignInMainKeep>
        <S.SignInButton>로그인</S.SignInButton>
        <S.SearchSpanWrapper>
            <S.SearchSpan>비밀번호 찾기</S.SearchSpan>
            <S.SearchSpan>아이디 찾기</S.SearchSpan>
            <S.SearchSpan>회원가입</S.SearchSpan>
        </S.SearchSpanWrapper>
      </S.MainWrapper>
    </S.Wrapper>
  );
};

export default SignIn;
