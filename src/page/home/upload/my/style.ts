import { CryptonTypography } from "src/style/typography/font";
import { CryptonColor } from "src/style/color/color";
import styled, { keyframes, css } from "styled-components";

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
`;

export const FileWrap = styled.div`
  width: calc(100% - 300px);
  height: 100vh;

  /* overflow-y: scroll; */

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-evenly;
`;

export const UploadFileWrap = styled.div`
  width: 90%;
  height: 30%;

  display: flex;
  flex-direction: column;

  position: relative;

  h1 {
    font-family: Pretendard;
    font-weight: 800;
    color: #393939;
    font-size: 1.3rem;
    margin-top: 1%;
    margin-bottom: 1%;
  }

  section > section > img {
    width: 24px;
    height: 24px;
  }

  button {
    width: 100px;
    height: 35px;
    background: ${CryptonColor.yellow5};
    color: ${CryptonColor.gray7};
    ${CryptonTypography.title.subHead3}
    cursor: pointer;
  }

  div {
    width: 100%;
    height: 90%;

    position: relative;
    &:focus {
      outline: none;
    }

    background: rgba(255, 183, 0, 5%);
    border: 0.5px solid ${CryptonColor.yellow5};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    img {
      width: 52px;
      height: 70px;
    }

    label {
      width: 90px;
      height: 40px;

      display: flex;
      align-items: center;
      justify-content: center;

      background: ${CryptonColor.gray7};
      ${CryptonTypography.title.subHead3}
      color: ${CryptonColor.white};
      cursor: pointer;
      margin: 0;
    }
  }
`;

export const RecentFileWrap = styled.div`
  width: 90%;
  height: 30%;

  display: flex;
  flex-direction: column;
  margin-top: 1%;
  div {
    width: 100%;
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: space-between;

    div {
      width: 20%;
      display: flex;
      justify-content: unset;
      align-items: center;
      gap: 10px;
      h1 {
        ${CryptonTypography.title.display1}
        color: ${CryptonColor.gray7};
      }
      span {
        ${CryptonTypography.Body.body2}
        color: ${CryptonColor.gray6};
      }
      img {
        width: 9px;
        height: 7.5px;
      }

      div > div {
        display: flex;
        flex-direction: column;
        position: absolute;
        width: 100%;
        top: 80%;
        right: 27%;

        border: 1px solid #000;
      }
    }
  }
`;

export const RecentFiles = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  align-items: flex-start !important;
  justify-content: flex-start !important;
  gap: 20px;

  overflow: scroll;
`;

export const RecentFile = styled.div`
  width: 20%;
  height: 80%;

  border: 1px solid ${CryptonColor.gray3};

  display: flex;
  flex-direction: column;
`;

export const RecentFileTitle = styled.div`
  display: flex;
  width: auto !important;
  white-space: nowrap;
  height: 15%;
  align-items: center;
  justify-content: space-between !important;
  span {
    ${CryptonTypography.Body.body2}
    color: ${CryptonColor.gray6};
  }

  img {
    width: 24px !important;
    height: 24px !important;
  }
`;

export const RecentFilePreview = styled.iframe`
  width: 80%;
  height: 60%;

  margin: 0 !important;

  border: 1px solid;
`;

export const RecentFileFooter = styled.div`
  display: flex;
  width: 94% !important;
  height: 15%;
  align-items: center;
  justify-content: space-between !important;

  span {
    ${CryptonTypography.Body.caption}
    color: ${CryptonColor.gray6};
  }
`;

export const AboutFileWrap = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background: #f6f7f9;

  img {
    margin-top: 20%;
  }

  span {
    font-family: Pretendard;
    font-size: 1rem;
    font-weight: 400;
    color: #767678;
  }

  iframe {
    margin-top: 10%;
    width: 90%;
    height: 20%;
  }
`;

export const AboutFileHeader = styled.div`
  width: 96%;
  height: 10%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const titleWrap = styled.div`
  width: 92%;
  height: 50%;

  padding: 0 4% 0 4%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    ${CryptonTypography.title.headline1}
    color: ${CryptonColor.gray6};
  }

  img {
    width: 24px;
    height: 24px;
    margin: 0;
  }
`;

export const ClickMenuWrap = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;

export const ClickMenu = styled.div<{ section: boolean }>`
  width: fit-content;
  height: fit-content;
  padding-bottom: 2%;

  ${({ section }) => {
    if (section) {
      return css`
        ${CryptonTypography.title.subHead2};
        color: ${CryptonColor.gray6};
        border-bottom: 5px solid ${CryptonColor.gray6};
      `;
    } else {
      return css`
        ${CryptonTypography.Body.body1};
        color: ${CryptonColor.gray5};
      `;
    }
  }}
`;

export const AccessWrap = styled.div`
  width: 92%;
  height: 20%;
  margin-top: 10%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    ${CryptonTypography.title.subHead3};
    color: ${CryptonColor.gray5};
  }

  img {
    width: 40px;
    height: 40px;
    margin: 0;
  }

  button {
    width: 50%;
    height: 25%;
    margin: 0;

    border: 1px solid ${CryptonColor.yellow5};
    background: ${CryptonColor.yellow0};
    ${CryptonTypography.title.subHead3}
    color: ${CryptonColor.yellow5};
  }
`;

export const FileInfoWrap = styled.div`
  width: 92%;
  height: 40%;

  margin-top: 10%;

  border: 1px solid;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h1 {
    ${CryptonTypography.title.subHead3};
    color: ${CryptonColor.gray5};
  }

  span {
    ${CryptonTypography.Body.caption};
    color: ${CryptonColor.gray6};
  }

  p {
    ${CryptonTypography.Body.body1};
    ${CryptonColor.gray7}
  }
`;
