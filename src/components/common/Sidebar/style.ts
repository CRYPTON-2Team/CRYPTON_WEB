import { CryptonColor } from "src/style/color/color";
import { CryptonTypography } from "src/style/typography/font";
import styled from "styled-components";

export const SidebarWrap = styled.div`
  width: 230px;
  min-width: 230px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 1px solid ${CryptonColor.gray2};
`;

export const LogoWrap = styled.div`
  width: 100%;
  height: 11%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    background: transparent;
    cursor: pointer;
  }
`;

export const ItemWrap = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40%;
  margin-top: 20%;
  row-gap: 30px;

  hr {
    width: 80%;
    height: 1px;

    border-bottom: 1px solid;
  }
`;

export const Item = styled.div<{ item: boolean }>`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  position: relative;
  cursor: pointer;

  background: ${({ item }) => (item ? CryptonColor.yellow0 : "transparent")};

  div {
    width: 20px;
    height: 100%;
    display: ${({ item }) => (item ? "block" : "none")};
    background: ${CryptonColor.yellow5};
    position: absolute;
    left: 0;
  }

  span {
    ${({ item }) => (item ? CryptonTypography.title.subHead2 : CryptonTypography.Body.body1)}
    color: ${({ item }) => (item ? CryptonColor.yellow5 : CryptonColor.gray6)};
  }
`;
