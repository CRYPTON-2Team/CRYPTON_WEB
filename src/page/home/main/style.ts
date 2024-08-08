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
`;

export const FileWrap = styled.div`
  width: calc(100% - 320px);
  height: 100%;

  overflow-y: scroll;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-evenly;

  border: 1px solid blue;
`;

export const UploadFileWrap = styled.div`
  width: 90%;
  height: 30%;

  display: flex;
  flex-direction: column;

  h1 {
    font-family: Pretendard;
    font-weight: 800;
    color: #393939;
    font-size: 1.3rem;
  }

  div {
    width: 100%;
    height: 90%;

    background: #555555;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 20px;
      height: 20px;
    }

    span {
      color: white;
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
      font-family: Pretendard;
      font-weight: 800;
      color: #393939;
      font-size: 1.3rem;
    }
    div {
      width: 20%;
      display: flex;
      justify-content: unset;
      align-items: center;
      gap: 10px;
      span {
        font-family: Pretendard;
        font-weight: 600;
        color: #a7a7a7;
        font-size: 1rem;
      }
      img {
        width: 9px;
        height: 7.5px;
      }
    }
    span {
      font-family: Pretendard;
      font-weight: 800;
      color: #393939;
      font-size: 0.845rem;
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
        font-family: Pretendard;
        font-weight: 800;
        color: #000000;
        font-size: 1.1rem;
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
        font-family: Pretendard;
        font-weight: 500;
        color: #000000;
        font-size: 0.875rem;
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
