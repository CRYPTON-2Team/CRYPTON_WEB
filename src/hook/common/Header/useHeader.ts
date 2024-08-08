import { useState } from "react";

const useHeader = () => {
  const [isclicked, setIsClicked] = useState<boolean>(false);

  const handleClicked = () => {
    setIsClicked((prev) => !prev);
  };

  return {
    isclicked,
    handleClicked,
  };
};

export default useHeader;
