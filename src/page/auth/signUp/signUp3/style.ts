
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
`;

export const ContentInput = styled.input`
  width: 80%;
  height: 28%;
  border: 1px solid ${CryptonColor.gray4};
  outline: none;
`;

export const EmailContentInput = styled.input`
  width: 80%;
  height: 100%;
  border: 1px solid ${CryptonColor.gray4};
  outline: none;
`;

export const EmailWrapper = styled.div`
  width: 100%;
  height: 28%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EmailButton = styled.button`
  width: 15%;
  height: 75%;
  background-color: black;
  border: none;
  color: white;
  font-size: 1rem;

  cursor: pointer;
`;

export const ReEmailButton = styled.button`
  width: 15%;
  height: 75%;
  background-color: ${CryptonColor.gray3};
  border: none;
  color: white;
  font-size: 1rem;
`;

export const ButtonWrapper = styled.div`
  width: 30%;
  height: 8%;
  display: flex;
  justify-content: space-between;
`;

export const BackButton = styled.button`
  width: 45%;
  height: 100%;
  border: none;
  background-color: ${CryptonColor.gray4};
  color: white;

  cursor: pointer;
`;

export const SucessButton = styled.button`
  width: 45%;
  height: 100%;
  border: none;
  background-color: ${CryptonColor.gray6};
  color: white;

  cursor: pointer;
`;
