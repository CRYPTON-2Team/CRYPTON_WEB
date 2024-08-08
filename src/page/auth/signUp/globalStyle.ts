import styled from "styled-components";
import Check from "src/assets/auth/signUp/Icons/StatusCheck.svg";
import Dead from "src/assets/auth/signUp/Icons/StatusDead.svg";

export const SignUpStatusWrapper = styled.div`
  width: 75%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeaveStatusBox = styled.div`
  width: 31px;
  height: 30px;
  background-image: url(${Check});
  background-repeat: no-repeat;
`;

export const DeadStatusBox = styled.div`
  width: 31px;
  height: 30px;
  background-image: url(${Dead});
  background-repeat: no-repeat;
`;

export const LeaveStatusLine = styled.div`
  width: 18%;
  height: 5%;
  background-color: black;
`;

export const DeadStatusLine = styled.div`
  width: 12%;
  height: 3%;

  background-color: #d2d5da;
`;

export const StatusSpanWrapper = styled.div`
  width: 17%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const LeaveSpan = styled.span`
  font-size: 1rem;
  margin-bottom: 20%;
`;

export const DeadSpan = styled.span`
  font-size: 1rem;
  color: #d2d5da;
  margin-bottom: 20%;
`;
