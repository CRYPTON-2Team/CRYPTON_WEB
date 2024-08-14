import React, { useEffect, useState } from "react";
import * as S from "./style";
import DropDown from "src/assets/DropDown.svg";
import Search from "src/assets/search.svg";
import Setting from "src/assets/Setting.svg";
import Bell from "src/assets/bell.svg";
import Avatar from "src/assets/Avatar.svg";
import useHeader from "src/hook/common/Header/useHeader";
import SearchModal from "src/components/modal/Search/index";
import { HEADER_DROPDOWN_ITEMS } from "src/constants/common/Header/header.constants";
import { useCallback } from "react";
import { searchStore } from "src/stores/home/search/search.stores";

const Header = () => {
  const { isclicked, item, keyword, handleClicked, handleItemName } = useHeader();
  const [search, setSearch] = useState<string>("");
  const [filteredValue, setFilteredValue] = useState<any>();

  const SearchStore = searchStore((state) => state.file);

  const handleSearchKeyword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearch(newValue);
  }, []);

  const SearchHandle = () => {
    const filteredData = SearchStore.filter((item) => {
      return Object.values(item).join("").toLowerCase().includes(search.toLowerCase());
    });
    setFilteredValue(filteredData);
  };

  return (
    <S.HeaderWrap>
      <div style={{ width: "620px", height: "48px", display: "flex", flexDirection: "column", position: "relative" }}>
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
          <input
            placeholder="저자, 제목등을 입력해주세요."
            value={search}
            onChange={handleSearchKeyword}
            onKeyUp={SearchHandle}
          />
          <img src={Search} alt="" />
        </S.InputWrap>
      </div>
      <S.UtilityWrap>
        <img src={Setting} />
        <img src={Bell} />
        <img src={Avatar} />
      </S.UtilityWrap>
      {search && <SearchModal files={filteredValue} />}
    </S.HeaderWrap>
  );
};

export default Header;
