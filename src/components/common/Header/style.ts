import styled from "styled-components";
import { CryptonColor } from "src/style/color/color";
import { CryptonTypography } from "src/style/typography/font";

export const HeaderWrap = styled.div`
  width: 100%;
  height: 12.5%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: 350px;
`;

export const InputWrap = styled.div`
  width: 620px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${CryptonColor.yellow5};

  input {
    padding-left: 2%;
    width: 80%;
    height: 90%;

    border: none;

    ${CryptonTypography.Body.body2}

    &:focus {
      outline: none;
    }

    &::placeholder {
      ${CryptonTypography.Body.body2}
      color: ${CryptonColor.gray3};
    }
  }
`;

export const DropDownButton = styled.div`
  width: 10%;
  height: 50%;

  border-right: 1px solid ${CryptonColor.yellow5};

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 2%;

  img {
    width: 9px;
    height: 8px;
  }
`;

export const DropDownItem = styled.div<{ isclicked: boolean }>`
  position: ${({ isclicked }) => (isclicked ? "absolute" : "relative")};
  height: ${({ isclicked }) => (isclicked ? "100px" : "100%")};
  width: 100%;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    ${CryptonTypography.Body.body2}
    color: ${CryptonColor.gray6};
  }
`;

export const UtilityWrap = styled.div`
  width: 130px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  img {
    width: 24px;
    height: 24px;

    &:nth-child(3) {
      width: 40px;
      height: 40px;
    }
  }

  padding-right: 1%;
`;
