import * as S from "./style";
import FirstStatusBar from "../FirstStatus";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp1 = () => {
  const [view1, setView1] = useState<boolean>(false);
  const [view2, setView2] = useState<boolean>(false);
  const [view3, setView3] = useState<boolean>(false);
  const [view4, setView4] = useState<boolean>(false);

  const navigate = useNavigate();

  const BackNav = () => {
    navigate("/signin")
  }

  const NextNav = () => {
    navigate("/signup2")
  };

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
          <S.DropDownDiv>
            <S.UseCheckWrapper onClick={() => setView1(!view1)}>
              <S.UseCheckBox type="checkbox" />
              <S.UseCheckSpan>{`[필수] 이용약관동의`}</S.UseCheckSpan>
            </S.UseCheckWrapper>
            {view1 === true && <S.Agree1></S.Agree1>}
            <S.UseCheckWrapper onClick={() => setView2(!view2)}>
              <S.UseCheckBox type="checkbox" />
              <S.UseCheckSpan>{`[필수] 이용약관동의`}</S.UseCheckSpan>
            </S.UseCheckWrapper>
            {view2 === true && <S.Agree1></S.Agree1>}
            <S.UseCheckWrapper onClick={() => setView3(!view3)}>
              <S.UseCheckBox type="checkbox" />
              <S.UseCheckSpan>{`[선택]광고성 정보 수신 동의 (SMS/MMS)`}</S.UseCheckSpan>
            </S.UseCheckWrapper>
            {view3 === true && <S.Agree1></S.Agree1>}
            <S.UseCheckWrapper onClick={() => setView4(!view4)}>
              <S.UseCheckBox type="checkbox" />
              <S.UseCheckSpan>{`[선택]광고성 정보 수신 동의 (이메일)`}</S.UseCheckSpan>
            </S.UseCheckWrapper>
            {view4 === true && <S.Agree1></S.Agree1>}
          </S.DropDownDiv>
        </S.ContentMainWrpper>
        <S.GideSpan>
          *개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있으며 동의 거부 시에는 회원가입이 불가합니다.
        </S.GideSpan>
        <S.ButtonWrapper>
          <S.BackButton onClick={BackNav}>취소</S.BackButton>
          <S.SucessButton onClick={NextNav}>확인</S.SucessButton>
        </S.ButtonWrapper>
      </S.MainWrapper>
    </S.Wrapper>
  );
};

export default SignUp1;
