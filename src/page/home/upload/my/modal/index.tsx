import React from "react";
import * as S from "./style";
import Help from "src/assets/question.svg";
import Setting from "src/assets/settings.svg";
import Avartar from "src/assets/Avatar.svg";
import Info from "src/assets/information-circle.svg";
import useFile from "src/hook/file/useFile";
import { fileStore } from "src/stores/home/main/main.stores";

interface ModalProps {
  onClose: () => void;
}

const UploadModal = ({ onClose }: ModalProps) => {
  const { onFileShare, visible, handleVisible, shareEmail, handleShareEmail, onUpload } = useFile();
  
  return (
    <S.ModalWrap>
      <S.FileModal>
        <S.TitleWrap>
          <span>{"asdf"}</span>
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
              <div
                style={{ display: "flex", alignItems: "center", gap: "3px", width: "25%" }}
                onClick={() => handleVisible(false)}
              >
                <input type="radio" id="not" name="apperance" checked={visible === false} />
                <label htmlFor="not">비공개</label>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "3px", width: "25%" }}
                onClick={() => handleVisible(true)}
              >
                <input type="radio" id="yes" name="apperance" checked={visible === true} />
                <label htmlFor="not">공개</label>
              </div>
            </div>
          </S.AppeeranceWrap>
          <S.AppeeranceInfoWrap>
            {visible ? (
              <>
                <h1>모든 사용자</h1>
                <span>크립톤의 모든 사용자가 볼 수 있어요.</span>
                <div>
                  <img src={Info} alt="" />
                  <span>이 파일은 제한없이 다운로드 됩니다.</span>
                </div>
              </>
            ) : (
              <>
                <h1>비공개 공유</h1>
                <span>
                  아래에 이메일 주소를 입력해 초대할 수 있습니다.초대대상자가 비공개 문서를 보려면 크립톤의 계정에
                  로그인해야 됩니다.
                </span>
                <S.InputWrap
                  placeholder="초대 대상자의 이메일 혹은 아이디를 적어주세요."
                  style={{ height: "100px" }}
                  value={shareEmail}
                  onChange={handleShareEmail}
                />
              </>
            )}
          </S.AppeeranceInfoWrap>
        </S.UploadFileWrap>
        <S.ButtonWrap>
          {visible === true && <S.LinkButton>링크 복사</S.LinkButton>}
          <S.ComfirmButton
            onClick={() => {
              onClose();
              if (visible === true) {
                onUpload();
              } 
              
              else {
                onFileShare();
              }
            }}
          >
            확인
          </S.ComfirmButton>
        </S.ButtonWrap>
      </S.FileModal>
    </S.ModalWrap>
  );
};

export default UploadModal;
