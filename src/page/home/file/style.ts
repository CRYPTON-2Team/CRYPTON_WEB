import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainWrapper = styled.div`
  width: 30%;
  height: 50%;
  display: flex;
  border: 1px solid #aeaeae;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-size: 2.5rem;
  margin-bottom: 10%;
`;

export const UploadFileSpan = styled.span`
  font-size: 1rem;
  margin-bottom: 20%;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-around;
`;

export const UploadButtonStyle = styled.label`
  width: 20%;
  height: 40%;
  color: black;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 0.2rem;
  border: 1px solid black;
`;

export const UploadButton = styled.input`
  display: none;
`;

export const DownLoadButtonStyle = styled.label`
  width: 20%;
  height: 40%;

  color: black;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 0.2rem;
  border: 1px solid black;
`;

export const DownLoadButton = styled.input`
  display: none;
`;
