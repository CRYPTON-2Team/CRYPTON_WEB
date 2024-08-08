import { CryptonTypography } from "src/style/typography/font";
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
  width: 28%;
  height: 45%;
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const EmainInput = styled.input`
  width: 93.8%;
  height: 42%;
  ${CryptonTypography.Body.body2}
  border: 1px solid ${CryptonColor.gray2};
  padding-left: 5%;
  outline: none;

  &:focus {
    border: 1px solid ${CryptonColor.yellow4};
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #fff inset;
    -webkit-text-fill-color: #000;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export const PasswordInput = styled.input`
  width: 93.8%;
  height: 42%;
  ${CryptonTypography.Body.body2}
  border: 1px solid ${CryptonColor.gray2};
  outline: none;
  padding-left: 5%;

  &:focus {
    border: 1px solid ${CryptonColor.yellow4};
  }
`;

export const SignInMainKeep = styled.div`
  width: 30%;
  height: 10%;
  display: flex;
  align-items: center;
  margin-top: 1%;
  margin-bottom: 1%;
  gap: 5px;
  img {
    cursor: pointer;
  }
`;

export const LoginKeepCheckBox = styled.input`
  width: 20%;
  height: 50%;
  background-color: red;
`;

export const LoginKeepSpan = styled.span`
  ${CryptonTypography.Body.body1}
  color: ${CryptonColor.gray4};
`;

export const SignInButton = styled.button`
  width: 100%;
  height: 15%;
  background-color: ${CryptonColor.yellow5};
  color: ${CryptonColor.gray7};
  ${CryptonTypography.title.headline1}
  outline: none;
  border: none;
  margin-bottom: 10%;

  cursor: pointer;
`;

export const SearchSpanWrapper = styled.div`
  width: 50%;
  height: 7%;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: space-between;

  hr {
    width: 1px;
    height: 10px;

    background: ${CryptonColor.gray3};
  }
`;

export const SearchSpan = styled.span`
  color: ${CryptonColor.gray4};
  ${CryptonTypography.Body.body1}
`;
