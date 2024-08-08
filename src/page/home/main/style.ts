import { CryptonTypography } from "src/style/typography/font";
import { CryptonColor } from "src/style/color/color";
import styled from "styled-components";

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
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
`;

export const FileWrap = styled.div`
  width: calc(100% - 300px);
  height: 100%;

  overflow-y: scroll;

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

    embed {
      position: absolute;
      left: 70%;
      top: 10%;
    }
  }
`;

export const RecentFileWrap = styled.div`
  width: 90%;
  height: 30%;

  display: flex;
  flex-direction: column;
  div {
    width: 100%;
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: space-between;
    h1 {
      ${CryptonTypography.title.display2}
      color: ${CryptonColor.gray7};
    }
    div {
      width: 20%;
      display: flex;
      justify-content: unset;
      align-items: center;
      gap: 10px;
      span {
        ${CryptonTypography.Body.body2}
        color: ${CryptonColor.gray6};
      }
      img {
        width: 9px;
        height: 7.5px;
      }
    }
  }
`;

export const RecentFiles = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  overflow: scroll;

  div {
    width: 200px !important;
    height: 80%;

    border: 1px solid;
    display: flex;
    flex-direction: column;
    gap: 0;
    justify-content: unset;

    div:nth-child(1) {
      width: 96%;
      height: 10%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-left: 4%;
      align-items: center;
      border: none !important;

      span {
        ${CryptonTypography.Body.body2}
        color: ${CryptonColor.gray6};
      }
      img {
        width: 24px;
        height: 24px;
      }
    }

    div:nth-child(2) {
      //추후 img태그로 변경예정
      width: 90% !important;
      height: 80%;

      border: none !important;

      background: #d7d7d7d7;
    }

    div:nth-child(3) {
      width: 92%;
      height: 10%;
      display: flex;
      align-self: center;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border: none !important;
      span {
        ${CryptonTypography.Body.caption}
        color: ${CryptonColor.gray6};
      }
      img {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

export const WeeklyWrap = styled.div`
  width: 90%;
  height: 40%;

  display: flex;
  flex-direction: column;

  border: 1px solid;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      font-family: Pretendard;
      font-weight: 800;
      color: #000000;
      font-size: 1.3rem;
    }

    span {
      font-family: Pretendard;
      font-weight: 800;
      color: #767676;
      font-size: 0.845rem;
    }
  }
`;

export const WeeklyFile = styled.div`
  width: 100%;
  height: 120px;
  min-height: 120px;

  border: 1px solid;
  display: flex;
  justify-content: unset !important;

  div {
    width: 6%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: Pretendard;
    font-size: 2rem;
    font-weight: 800;
    color: #ffb700;
    margin-right: 10px;
  }
`;

export const WeeklyInfoWrap = styled.div`
  width: 80% !important;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start !important;
  justify-content: center;
  gap: 10px;

  h1 {
    font-family: Pretendard;
    font-size: 1.3rem;
    font-weight: 800;
    color: #2e2e2e;
  }
  div {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: flex-start;
    gap: 30px;
    border: none;
    span {
      font-family: Pretendard;
      font-size: 0.875rem;
      font-weight: 400;
      color: #767678;
    }
  }
`;

export const WeeklySettingWrap = styled.div`
  width: 14% !important;
  display: flex;
  align-items: center;
  justify-content: space-evenly !important;
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
`;
