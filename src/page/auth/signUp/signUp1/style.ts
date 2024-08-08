import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainWrapper = styled.div`
  width: 50%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignUpTitle = styled.div`
  font-size: 1.5rem;
  margin-bottom: 5%;
`;

export const ContentMainWrpper = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  border: 1px solid #374151;
`;

export const WholeUseCheckWrapper = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  border-bottom: 1px solid #374151;
  align-items: center;
`;

export const UseCheckBox = styled.input`
  width: 8%;
  height: 30%;
`;

export const UseCheckSpan = styled.span`
  font-size: 1.2rem;
`;
