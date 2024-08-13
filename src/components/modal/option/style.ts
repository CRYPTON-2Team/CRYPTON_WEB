import styled from "styled-components";
import Arrows from "src/assets/home/componentIcon/OptionArrow.svg";
import DownLoad from "src/assets/home/componentIcon/OptionDownLoad.svg";
import Share from "src/assets/home/componentIcon/OptionShare.svg";
import Important from "src/assets/home/componentIcon/OptionImportant.svg";
import { CryptonColor } from "src/style/color/color";

export const Wrapper = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-radius: 5px;
  position: absolute;
  background: white;
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
