import styled from "styled-components";
import { CryptonColor } from "src/style/color/color";

export const MainWrapper = styled.div`
  width: 450px;
  border: 1px solid ;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border-radius: 5px;
`;

export const TitleWrapper = styled.div`
  width: 350px;
  height: 45px;
  display: flex;
  align-items: center;
  margin-left: 15px;
`;

export const Title = styled.span`
  font-size: 19px;
  font-weight: 700;
`;

export const StyleDiv = styled.div`
  width: 5px;
  height: 100%;
  background-color: white;
`

export const ContentWrapper = styled.div`
  width: 450px;
  height: 60px;
  border-bottom: 1px solid ${CryptonColor.gray3};
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  &:hover{
    background-color: ${CryptonColor.yellow1}
  }

  &:hover .style {
    background-color: ${CryptonColor.yellow4}
  }
  
`;

export const ProfileWrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 15px;
`;

export const Profile = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 1000px;
  background-color: gray;
`;

export const ProfileLog = styled.span`
  font-size: 1rem;
`;

export const ProfileDateWrapper = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DateSpan = styled.span`
  font-size: 1rem;
`;
