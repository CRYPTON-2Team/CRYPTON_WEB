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
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignUpTitle = styled.div`
  font-size: 1.5rem;
  margin-bottom: 2%;
`;

export const ContentMainWrpper = styled.div`
  width: 95%;
  height: 65%;
  display: flex;
  border: 1px solid #374151;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2%;
`;

export const WholeUseCheckWrapper = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  border-bottom: 1px solid #374151;
  align-items: center;
`;

export const UseCheckBox = styled.input`
  width: 50px;
  height: 20px;
`;

export const UseCheckSpan = styled.span`
  font-size: 1.2rem;
`;

export const DropDownDiv = styled.div`
  width: 90%;
  height: 70%;
  position: relative;
  overflow-y: scroll;

  margin-top: 2.5%;
  flex-direction: column;
`;

export const UseCheckWrapper = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    font-size: 1rem;
  }
`;

export const Agree1 = styled.div`
  width: 90%;
  height: 50%;
  border-radius: 0.5rem;
  overflow-y: scroll;
  border: 1px solid ${CryptonColor.gray3};
  margin: 0 auto;
`;

export const GideSpan = styled.span`
  font-size: 1rem;
  color: ${CryptonColor.gray4};
  margin-bottom: 3%;
`;

export const ButtonWrapper = styled.div`
  width: 30%;
  height: 6%;
  display: flex;
  justify-content: space-between;
`

export const BackButton = styled.button`
  width: 45%;
  height: 100%;
  border: none;
  background-color: ${CryptonColor.gray4};
  color: white;

  cursor: pointer;
`

export const SucessButton = styled.button`
  width: 45%;
  height: 100%;
  border: none;
  background-color: ${CryptonColor.gray6};
  color: white;

  cursor: pointer;
`