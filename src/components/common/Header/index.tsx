import React from "react";
import * as S from "./style";
import DropDown from "src/assets/DropDown.svg";
import Search from "src/assets/search.svg";
import Setting from "src/assets/Setting.svg";
import Bell from "src/assets/bell.svg";
import Avatar from "src/assets/Avatar.svg";
import useHeader from "src/hook/common/Header/useHeader";
import { HEADER_DROPDOWN_ITEMS } from "src/constants/common/Header/header.constants";

const Header = () => {
  const { isclicked, item, handleClicked, handleItemName } = useHeader();
  return (
    <S.HeaderWrap>
      <S.InputWrap>
        <S.DropDownButton onClick={handleClicked}>
          <S.DropDownItem isclicked={isclicked}>
            <span>{item}</span>
            <img src={DropDown} alt="" />
          </S.DropDownItem>
          <S.DropDown isvisible={isclicked}>
            {HEADER_DROPDOWN_ITEMS.map((item, idx) => (
              <span key={idx} onClick={() => handleItemName(item)}>
                {item}
              </span>
            ))}
          </S.DropDown>
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
