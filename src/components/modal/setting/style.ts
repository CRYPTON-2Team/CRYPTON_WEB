import styled from "styled-components";
import Icon1 from "src/assets/home/componentIcon/SettingArrow.svg";
import Check from "src/assets/home/componentIcon/SettingCheck.svg";
export const Wrapper = styled.div`
  width: 450px;
  height: 140px;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const MainWrapper = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconWrapper = styled.div`
  width: 25px;
  height: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

export const SpanWrapper = styled.div`
  width: 365px;
  height: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const BackIcon = styled.div`
  width: 18px;
  height: 18px;
  background-image: url(${Icon1});
`;

export const CheckIcon = styled.div`
  width: 18px;
  height: 18px;
  background-image: url(${Check});
`;

export const TitleSpan = styled.span`
  font-size: 1.2rem;
  color: black;
  font-weight: 800;
`

export const SettingSpan = styled.span`
  font-size: 1rem;
`