import styled from "styled-components";

export const SidebarWrap = styled.div`
  width: 230px;
  min-width: 230px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid;
`;

export const LogoWrap = styled.div`
  width: 100%;
  height: 11%;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid; // 로고 이미지 추가 후 삭제 예정

  margin-bottom: 40%;

  img {
    background: transparent;
    cursor: pointer;
  }
`;

export const ItemWrap = styled.div`
  width: 100%;
  height: 30%;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;

  div {
    display: flex;
    gap: 10px;

    cursor: pointer;
  }

  hr {
    width: 80%;
    height: 1px;

    border-bottom: 1px solid;
  }
`;
