import React from "react";
import * as S from "./style";
import Help from "src/assets/question.svg";
import Setting from "src/assets/settings.svg";
import Avartar from "src/assets/Avatar.svg";
import Info from "src/assets/information-circle.svg";

interface ModalProps {
  onClose: () => void;
}

const UploadModal = ({ onClose }: ModalProps) => {
  return (
    <S.ModalWrap onClick={onClose}>
      <S.FileModal>
        <S.TitleWrap>
          <span>vkdlf</span>
          <div>
            <img src={Help} alt="" />
            <img src={Setting} alt="" />
          </div>
        </S.TitleWrap>
        <S.InputWrap placeholder="사용자를 추가하면 공유가 가능해요" />
        <S.AcessPeopleWrap>
          <h1>액세스 권한이 있는 사용자</h1>
          <div>
            <div>
              <img src={Avartar} alt="" />
              <div>
                <h1>이름</h1>
                <span>example@example.com</span>
              </div>
            </div>
            <span>소유자</span>
          </div>
        </S.AcessPeopleWrap>
        <S.UploadFileWrap>
          <S.AppeeranceWrap>
            <h1>배포 또는 게시</h1>
            <div style={{ display: "flex", width: "80%", gap: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "3px", width: "25%" }}>
                <input type="radio" id="not" name="apperance" />
                <label htmlFor="not">비공개</label>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "3px", width: "25%" }}>
                <input type="radio" id="yes" name="apperance" />
                <label htmlFor="not">공개</label>
              </div>
            </div>
          </S.AppeeranceWrap>
          <S.AppeeranceInfoWrap>
            <h1>모든 사용자</h1>
            <span>크립톤의 모든 사용자가 볼 수 있어요.</span>
            <div>
              <img src={Info} alt="" />
              <span>이 파일은 제한없이 다운로드 됩니다.</span>
            </div>
          </S.AppeeranceInfoWrap>
        </S.UploadFileWrap>
        <S.ButtonWrap>
          <S.LinkButton>링크 복사</S.LinkButton>
          <S.ComfirmButton onClick={onClose}>확인</S.ComfirmButton>
        </S.ButtonWrap>
      </S.FileModal>
    </S.ModalWrap>
  );
};

export default UploadModal;
