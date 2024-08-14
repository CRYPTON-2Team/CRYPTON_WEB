import styled from "styled-components";
import { CryptonColor } from "src/style/color/color";
import { CryptonTypography } from "src/style/typography/font";

export const Wrapper = styled.div`
  width: 620px;
  border: 1px solid ${CryptonColor.yellow5};
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 24.6%;
  top: 100%;

  background: white;

  z-index: 1;
`;

export const ContentItemWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${CryptonColor.yellow0};
  }
  margin-bottom: 5px;
`;

export const ContetnItemMainWrapper = styled.div`
  width: 95%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
`;

export const SpanWrapper = styled.div`
  height: 100%;
 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleSpan = styled.span`
  ${CryptonTypography.title.subHead3}
  color: ${CryptonColor.gray6};
  
`;

export const AuthorSpan = styled.span`
  ${CryptonTypography.Body.caption}
  color: ${CryptonColor.gray6};
`;

export const DateSpan = styled.span`
  ${CryptonTypography.Body.caption}
  color: ${CryptonColor.gray6};
`;
