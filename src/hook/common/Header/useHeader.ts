import React, { useState } from "react";

const useHeader = () => {
  const [isclicked, setIsClicked] = useState<boolean>(false);
  const [item, setItem] = useState<string>("전체");
  const [keyword, setKeyword] = useState<string>("");

  const handleClicked = () => {
    setIsClicked((prev) => !prev);
  };
  const handleItemName = (i: string) => {
    setItem(i);
  };

  const handleSearchKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return {
    isclicked,
    item,
    keyword,
    handleClicked,
    handleItemName,
    handleSearchKeyword,
  };
};

export default useHeader;
