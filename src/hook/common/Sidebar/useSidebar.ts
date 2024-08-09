import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { NavigationProps } from "src/types/sidebar/sidebar.types";
const useSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [item, setItem] = useState<string>("홈");

  const handleItem = (i: string) => {
    setItem(i);
  };

  const HandleNavigation = ({ location }: NavigationProps) => {
    switch (location.pathname) {
      case "/":
        setItem("홈");
        break;
      case "/upload/my":
        setItem("내가 올린 문서");
        break;
      case "/stars":
        setItem("중요한 문서");
        break;
      case "/share":
        setItem("공유 문서");
        break;
      case "/recent":
        setItem("최근 문서");
        break;
      case "/bookmark":
        setItem("찜한 문서");
        break;
      case "/trash":
        setItem("휴지통");
        break;
      case "/cloud":
        setItem("저장 용량");
        break;
      default:
        setItem("");
        break;
    }
  };

  const HandleCategoryClick = (itemName: string) => {
    setItem(itemName);
    switch (itemName) {
      case "홈":
        navigate("/");
        break;
      case "내가 올린 문서":
        navigate("/upload/my");
        break;
      case "중요한 문서":
        navigate("/stars");
        break;
      case "공유 문서":
        navigate("/share");
        break;
      case "최근 문서":
        navigate("/recent");
        break;
      case "찜한 문서":
        navigate("/bookmark");
        break;
      case "휴지통":
        navigate("/trash");
        break;
      case "저장 용량":
        navigate("/cloud");
        break;
      default:
        navigate("");
    }
  };

  useEffect(() => {
    HandleNavigation({ location, navigate });
  }, [location.pathname]);

  return {
    item,
    handleItem,
    HandleCategoryClick,
  };
};

export default useSidebar;
