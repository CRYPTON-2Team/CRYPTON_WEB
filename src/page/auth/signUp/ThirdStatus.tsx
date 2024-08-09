import * as G from "./globalStyle";

const ThirdStatus = () => {
  return (
    <G.SignUp2StatusWrapper>
      <G.StatusSpanWrapper>
        <G.LeaveSpan>이용약관 동의</G.LeaveSpan>
        <G.LeavedStatusBox />
      </G.StatusSpanWrapper>
      <G.LeaveStatusLine />
      <G.StatusSpanWrapper>
        <G.LeaveSpan>인증</G.LeaveSpan>
        <G.LeavedStatusBox />
      </G.StatusSpanWrapper>
      <G.LeaveStatusLine />
      <G.StatusSpanWrapper>
        <G.LeaveSpan>아이디/비밀번호</G.LeaveSpan>
        <G.LeaveStatusBox />
      </G.StatusSpanWrapper>
      <G.DeadStatusLine />
      <G.StatusSpanWrapper>
        <G.DeadSpan>가입성공!</G.DeadSpan>
        <G.DeadStatusBox />
      </G.StatusSpanWrapper>
    </G.SignUp2StatusWrapper>
  );
};

export default ThirdStatus;
