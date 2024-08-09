import React from "react";
import * as S from "./style";
import {
  SIDEBAR_ITEM_FIRST,
  SIDEBAR_ITEM_SECOND,
  SIDEBAR_ITEM_THIRD,
} from "src/constants/common/Sidebar/sidebar.constants";
import useSidebar from "src/hook/common/Sidebar/useSidebar";

const Sidebar = () => {
  const { item, handleItem, HandleCategoryClick } = useSidebar();
  return (
    <S.SidebarWrap>
      <S.LogoWrap>
        <img src="" alt="로고" /> {/* 로고 이미지 추가 후 src추가 예정 */}
      </S.LogoWrap>
      <S.ItemWrap>
        {SIDEBAR_ITEM_FIRST.map((it, idx) => (
          <S.Item key={idx} onClick={() => handleItem(it.name)} item={item === it.name ? true : false}>
            <div></div>
            <img src={it.name === item ? it.clicked : it.default} alt={it.name} />
            <span onClick={() => HandleCategoryClick(it.name)}>{it.name}</span>
          </S.Item>
        ))}
        <hr />
        {SIDEBAR_ITEM_SECOND.map((it, idx) => (
          <S.Item key={idx} onClick={() => handleItem(it.name)} item={item === it.name ? true : false}>
            <div></div>
            <img src={it.name === item ? it.clicked : it.default} alt={it.name} />
            <span onClick={() => HandleCategoryClick(it.name)}>{it.name}</span>
          </S.Item>
        ))}
        <hr />
        {SIDEBAR_ITEM_THIRD.map((it, idx) => (
          <S.Item key={idx} onClick={() => handleItem(it.name)} item={item === it.name ? true : false}>
            <div></div>
            <img src={it.name === item ? it.clicked : it.default} alt={it.name} />
            <span onClick={() => HandleCategoryClick(it.name)}>{it.name}</span>
          </S.Item>
        ))}
      </S.ItemWrap>
    </S.SidebarWrap>
  );
};

export default Sidebar;
