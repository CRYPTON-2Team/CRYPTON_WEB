import React from "react";
import * as S from "./style";
import DropDown from "src/asset/DropDown.svg";
import Search from "src/asset/search.svg";
import Setting from "src/asset/Setting.svg";
import Bell from "src/asset/bell.svg";
import Avatar from "src/asset/Avatar.svg";
import useHeader from "src/hook/common/Header/useHeader";

const Header = () => {
  const { isclicked, handleClicked } = useHeader();
  return (
    <S.HeaderWrap>
      <S.InputWrap>
        <S.DropDownButton onClick={handleClicked}>
          <S.DropDownItem isclicked={isclicked}>
            <span>전체</span>
          </S.DropDownItem>
          {!isclicked && <img src={DropDown} alt="" />}
        </S.DropDownButton>
        <input placeholder="저자, 제목등을 입력해주세요." />
        <img src={Search} alt="" />
      </S.InputWrap>
      <S.UtilityWrap>
        <img src={Setting} />
        <img src={Bell} />
        <img src={Avatar} />
      </S.UtilityWrap>
    </S.HeaderWrap>
  );
};

export default Header;
