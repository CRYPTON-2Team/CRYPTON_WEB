import styled from "styled-components";
import { CryptonColor } from "src/style/color/color";

export const Wrapper = styled.div`
  width: 620px;
  border: 1px solid;
`;

export const ContentItemWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${CryptonColor.gray3};
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
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleSpan = styled.span`
  font-size: 1.2rem;
`;

export const AuthorSpan = styled.span`
  font-size: 0.8rem;
  color: ${CryptonColor.gray4};
`;

export const DateSpan = styled.span`
  font-size: 0.7rem;
`;
