import React from "react";
import * as S from "./style";
import {
  SIDEBAR_ITEM_FIRST,
  SIDEBAR_ITEM_SECOND,
  SIDEBAR_ITEM_THIRD,
} from "src/constants/common/Sidebar/sidebar.constants";

const Sidebar = () => {
  return (
    <S.SidebarWrap>
      <S.LogoWrap>
        <img src="" alt="로고" /> {/* 로고 이미지 추가 후 src추가 예정 */}
      </S.LogoWrap>
      <S.ItemWrap>
        {SIDEBAR_ITEM_FIRST.map((item, idx) => (
          <div key={idx}>
            <img src={item.img} alt={item.name} />
            <span>{item.name}</span>
          </div>
        ))}
        <hr />
        {SIDEBAR_ITEM_SECOND.map((item, idx) => (
          <div key={idx}>
            <img src={item.img} alt={item.name} />
            <span>{item.name}</span>
          </div>
        ))}
        <hr />
        {SIDEBAR_ITEM_THIRD.map((item, idx) => (
          <div key={idx}>
            <img src={item.img} alt={item.name} />
            <span>{item.name}</span>
          </div>
        ))}
      </S.ItemWrap>
    </S.SidebarWrap>
  );
};

export default Sidebar;
