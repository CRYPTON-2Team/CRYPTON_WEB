import styled from "styled-components";
import { CryptonColor } from "src/style/color/color";
import AppIcon from "src/assets/home/componentIcon/AppIcon.svg"

export const Wrapper = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-radius: 5px;
`;

export const ContentItemWrapper = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${CryptonColor.gray3};
  }
`;

export const ContetnItemMainWrapper = styled.div`
  width: 80%;
  height: 90%;
  display: flex;
  align-items: center;
`;


export const Icon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${AppIcon});
  margin-right: 20px;
`;