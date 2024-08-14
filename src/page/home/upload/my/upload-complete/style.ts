import styled from "styled-components";
import StarIcon from "src/assets/home/upload-complete/star.svg";
import FileShareIcon from "src/assets/home/upload-complete/share.svg";
import FileDownLoadIcon from "src/assets/home/upload-complete/download.svg";
import TrashIcon from "src/assets/home/upload-complete/trash.svg";
import { CryptonColor } from "src/style/color/color";

export const MainWrap = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
`;

export const PageWrap = styled.div`
  width: calc(100% - 230px);
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentWrap = styled.div`
  width: 75%;
  height: 92%;
  display: flex;
  margin-left: 2.5%;

  flex-direction: column;
`;

export const ContentTitleWrap = styled.div`
  width: 28%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleItemWrapper = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Star = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${StarIcon});
`;

export const Share = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${FileShareIcon});
`;

export const DownLoad = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${FileDownLoadIcon});
`;

export const Trash = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${TrashIcon});
`;

export const TitleSpan = styled.span`
  font-size: 1.75rem;
  font-weight: 700;
`;

export const BoxWrapper = styled.span`
  width: 100%;
  height: auto;
  display: flex;
  overflow-y: scroll;
  flex-wrap: wrap;
  gap: 30px 3.35%;
  margin-top: 3%;
`;

export const ContentBoxItemWrapper = styled.div`
  width: 190px;
  height: 180px;
  border: 1px solid ${CryptonColor.gray3};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus-within {
    background: red !important;
  }
`;

export const ContentCoxMainItemWrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BoxTitleWrapper = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BoxTitleSpan = styled.span`
  font-size: 1.1rem;
`;

export const BoxContentWrapper = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  background-color: ${CryptonColor.gray0};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const BoxFooterWrapper = styled.div`
  width: 100%;
  height: 15%;
`;
