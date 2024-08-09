import { useState } from "react";

const useSidebar = () => {
  const [item, setItem] = useState<string>("홈");

  const handleItem = (i: string) => {
    setItem(i);
  };

  return {
    item,
    handleItem,
  };
};

export default useSidebar;
