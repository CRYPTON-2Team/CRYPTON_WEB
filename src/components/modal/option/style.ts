import styled from "styled-components";
import Arrows from "src/assets/home/componentIcon/OptionArrow.svg";
import DownLoad from "src/assets/home/componentIcon/OptionDownLoad.svg";
import Share from "src/assets/home/componentIcon/OptionShare.svg";
import Important from "src/assets/home/componentIcon/OptionImportant.svg";
import { CryptonColor } from "src/style/color/color";

export const Wrapper = styled.div<{ position: number }>`
  width: 360px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px;
  position: absolute;
  background: white;

  left: ${({ position }) => {
    const itemWidth = 360; // 아이템 너비
    const itemPerRow = 5;

    // 아이템의 위치 계산
    const calculatedLeft = (position % itemPerRow) * itemWidth + 100;

    // 화면 너비를 초과하지 않도록 조정
    // return calculatedLeft > window.innerWidth - 360 ? window.innerWidth - 360 : calculatedLeft;
    return position % itemPerRow === 0
      ? calculatedLeft + itemWidth
      : position % itemPerRow === 1
      ? calculatedLeft + 220
      : calculatedLeft;
  }}px;
  top: ${({ position }) => Math.floor(position / 5) * (180 + 10) + 100}px; // 각 줄의 높이 조정
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

export const ArrowIcon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${Arrows});
  margin-right: 20px;
`;

export const DownLoadIcon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${DownLoad});
  margin-right: 20px;
`;

export const ShareIcon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${Share});
  margin-right: 20px;
`;

export const ImportantIcon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${Important});
  margin-right: 20px;
`;
