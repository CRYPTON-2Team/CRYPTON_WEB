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
  width: 98.8%;
  height: 42%;
  font-size: 1.25rem;
  border: 1px solid #a7a7a7;
  outline: none;
`;

export const PasswordInput = styled.input`
  width: 98.8%;
  height: 42%;
  font-size: 1.25rem;
  border: 1px solid #a7a7a7;
  outline: none;

`;

export const SignInMainKeep = styled.div`
  width: 30%;
  height: 10%;
  display: flex;
  align-items: center;
  margin-top: 1%;
  margin-bottom: 1%;
`

export const LoginKeepCheckBox = styled.input`
  width: 20%;
  height: 50%;
  background-color: red;
`

export const LoginKeepSpan = styled.span`
  font-size: 1rem;
  color: #a7a7a7;
`

export const SignInButton = styled.button`
  width: 100%;
  height: 15%;
  background-color: #646464;
  font-size: 1rem;
  color: white;
  font-weight: 600;
  outline: none;
  border: none;
  margin-bottom: 10%;
`

export const SearchSpanWrapper = styled.div`
  width: 50%;
  height: 7%;
  display: flex;
  align-self: center;
  justify-content: space-between;
`

export const SearchSpan = styled.span`
  font-size: 1rem;
  color: #a7a7a7;

`