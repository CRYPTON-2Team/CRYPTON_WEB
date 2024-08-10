import { CryptonColor } from "src/style/color/color";
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
  height: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignUpTitle = styled.div`
  font-size: 1.5rem;
  margin-bottom: 5%;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1%;
  margin-bottom: 8%;
  background-color: ${CryptonColor.gray3};
`;

export const SignInButton = styled.button`
  width: 15%;
  height: 10%;
  background-color: ${CryptonColor.gray7};
  font-size: 1rem;
  color: white;

  cursor: pointer;
`;
