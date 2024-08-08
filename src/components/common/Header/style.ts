import styled from "styled-components";

export const HeaderWrap = styled.div`
  width: 100%;
  height: 12.5%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border: 1px solid;

  gap: 350px;
`;

export const InputWrap = styled.div`
  width: 620px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid;

  input {
    padding-left: 2%;
    width: 80%;
    height: 90%;

    border: none;

    font-family: Pretendard;
    font-size: 1rem;
    font-weight: 600;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #a7a7a7;
    }
  }
`;

export const DropDownButton = styled.div`
  width: 10%;
  height: 50%;

  border-right: 1px solid;

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
    font-family: Pretendard;
    font-size: 1rem;
    font-weight: 600;

    color: #a7a7a7;
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
