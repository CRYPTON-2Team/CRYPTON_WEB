import * as G from "./globalStyle";

const FirstStatusBar = () => {
  return (
    <G.SignUpStatusWrapper>
      <G.StatusSpanWrapper>
        <G.LeaveSpan>이용약관 동의</G.LeaveSpan>
        <G.LeaveStatusBox />
      </G.StatusSpanWrapper>
      <G.DeadStatusLine />
      <G.StatusSpanWrapper>
        <G.DeadSpan>인증</G.DeadSpan>
        <G.DeadStatusBox />
      </G.StatusSpanWrapper>
      <G.DeadStatusLine />
      <G.StatusSpanWrapper>
        <G.DeadSpan>아이디/비밀번호</G.DeadSpan>
        <G.DeadStatusBox />
      </G.StatusSpanWrapper>
      <G.DeadStatusLine />
      <G.StatusSpanWrapper>
        <G.DeadSpan>가입성공!</G.DeadSpan>
        <G.DeadStatusBox />
      </G.StatusSpanWrapper>
    
    </G.SignUpStatusWrapper>
  );
};

export default FirstStatusBar;
