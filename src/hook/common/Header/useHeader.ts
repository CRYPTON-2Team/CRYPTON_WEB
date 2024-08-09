import { useState } from "react";

const useHeader = () => {
  const [isclicked, setIsClicked] = useState<boolean>(false);
  const [item, setItem] = useState<string>("전체");
  const handleClicked = () => {
    setIsClicked((prev) => !prev);
  };
  const handleItemName = (i: string) => {
    setItem(i);
  };

  return {
    isclicked,
    item,
    handleClicked,
    handleItemName,
  };
};

export default useHeader;
