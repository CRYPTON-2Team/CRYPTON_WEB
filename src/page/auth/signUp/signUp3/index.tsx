import * as S from "./style";
import ThirdStatus from "../ThirdStatus";
import { useNavigate } from "react-router-dom";

const SignUp3 = () => {
  const navigate = useNavigate();

  const BackNav = () => {
    navigate(-1);
  };

  const NextNav = () => {
    navigate("/signup4");
  };
  return (
    <S.Wrapper>
      <S.MainWrapper>
        <S.SignUpTitle>회원가입</S.SignUpTitle>
        <ThirdStatus />
        <S.ContentWrapper>
          <S.EmailWrapper>
            <S.EmailContentInput placeholder="아이디" />
            <S.EmailButton>중복확인</S.EmailButton>
          </S.EmailWrapper>
          <S.ContentInput placeholder="비밀번호를 입력해주세요" />
          <S.ContentInput placeholder="비밀번호를 재입력해주세요" />
        </S.ContentWrapper>
        <S.ButtonWrapper>
          <S.BackButton onClick={BackNav}>이전</S.BackButton>
          <S.SucessButton onClick={NextNav}>다음</S.SucessButton>
        </S.ButtonWrapper>
      </S.MainWrapper>
    </S.Wrapper>
  );
};

export default SignUp3;
