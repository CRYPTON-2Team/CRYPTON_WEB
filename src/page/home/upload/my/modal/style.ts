import { CryptonTypography } from "src/style/typography/font";
import { CryptonColor } from "src/style/color/color";
import styled from "styled-components";

export const ModalWrap = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.3);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FileModal = styled.div`
  width: 30%;
  height: 45%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  background: ${CryptonColor.white};
`;

export const TitleWrap = styled.div`
  width: 96%;
  height: 10%;
  padding: 0px 2% 0px 2%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    ${CryptonTypography.title.headline2}
    color: ${CryptonColor.gray6};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    img {
      cursor: pointer;
    }
  }
`;

export const InputWrap = styled.input`
  width: 92%;
  height: 10%;
  padding: 0px 2% 0px 2%;

  border: 1px solid ${CryptonColor.gray3};
  ${CryptonTypography.Body.bodyLong1}
  color: ${CryptonColor.black};

  &::placeholder {
    color: ${CryptonColor.gray5};
  }

  &:focus {
    outline: none;
  }
`;

export const AcessPeopleWrap = styled.div`
  width: 96%;
  height: 20%;
  padding: 0px 2% 0px 2%;

  display: flex;
  flex-direction: column;

  justify-content: space-evenly;

  h1 {
    ${CryptonTypography.Body.caption}
    color: ${CryptonColor.gray6};
  }

  div {
    width: 96%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 40px;
      height: 40px;
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: unset;
      width: 60%;

      div {
        width: fit-content;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        h1 {
          ${CryptonTypography.Body.body1}
          color:${CryptonColor.gray6};
        }
        span {
          ${CryptonTypography.Body.caption}
          color: #7f7f7f;
        }
      }
    }
    span {
      ${CryptonTypography.Body.caption}
      color: ${CryptonColor.gray4};
    }
  }
`;

export const UploadFileWrap = styled.div`
  width: 96%;
  height: 45%;
  padding: 0px 2% 0px 2%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AppeeranceWrap = styled.div`
  width: 100%;
  height: 40%;

  h1 {
    ${CryptonTypography.Body.caption}
    color: ${CryptonColor.gray6};
    margin-bottom: 2%;
  }

  input[type="radio"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border: 1px solid ${CryptonColor.gray6};
    border-radius: 50%;
    outline: none;
    cursor: pointer;
  }

  input[type="radio"]:checked {
    background-color: ${CryptonColor.gray6};
    border: 3px solid white;
    box-shadow: 0 0 0 1.6px ${CryptonColor.gray6};
  }

  label {
    margin-right: 20px;
    margin-left: 1%;
  }
`;

export const AppeeranceInfoWrap = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  gap: 5px;

  h1 {
    ${CryptonTypography.Body.body1}
    color: ${CryptonColor.gray6};
  }

  span {
    ${CryptonTypography.Body.caption}
    color: #7f7f7f;
  }

  div {
    width: 96%;
    height: 40%;
    padding: 0px 2% 0px 2%;
    background: ${CryptonColor.gray0};

    display: flex;
    align-items: center;
    gap: 2%;
  }

  input {
    
  }
`;

export const ButtonWrap = styled.div`
  width: 96%;
  height: 15%;

  padding: 0 2% 0 2%;

  display: flex;

  justify-content: space-between;
  align-items: center;
`;

export const LinkButton = styled.button`
  width: 20%;
  height: 70%;

  background: ${CryptonColor.yellow0};
  ${CryptonTypography.title.subHead3}
  color: ${CryptonColor.yellow5};

  border: 1px solid ${CryptonColor.yellow5};
  border-radius: 2px;

  cursor: pointer;
`;

export const ComfirmButton = styled.button`
  width: 15%;
  height: 70%;

  background: ${CryptonColor.yellow5};
  ${CryptonTypography.title.subHead3}
  color: ${CryptonColor.gray7};

  cursor: pointer;
`;
