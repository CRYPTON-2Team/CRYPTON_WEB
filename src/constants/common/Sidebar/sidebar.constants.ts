import Home from "src/assets/common/Sidebar/Home.svg";
import ClickedHome from "src/assets/common/Sidebar/ClickedHome.svg";
import File from "src/assets/common/Sidebar/upload-file.svg";
import CheckedFile from "src/assets/common/Sidebar/ClickedFile.svg";
import Star from "src/assets/common/Sidebar/star1.svg";
import ClicekdStar from "src/assets/common/Sidebar/ClickedStar.svg";
import Share from "src/assets/common/Sidebar/share-file.svg";
import ClickedShare from "src/assets/common/Sidebar/ClickedShare.svg";
import Recent from "src/assets/common/Sidebar/time.svg";
import ClickedRecent from "src/assets/common/Sidebar/ClickedTime.svg";
import Bookmark from "src/assets/bookmark.svg";
import ClickedBookmark from "src/assets/ClickedBookmark.svg";
import Trash from "src/assets/common/Sidebar/tabler_trash.svg";
import ClickedTrash from "src/assets/common/Sidebar/ClickedTrash.svg";
import Cloud from "src/assets/common/Sidebar/cloud.svg";
import ClickedCloud from "src/assets/common/Sidebar/ClickedCloud.svg";

export const SIDEBAR_ITEM_FIRST = [
  { default: Home, name: "홈", clicked: ClickedHome },
  { default: File, name: "내가 올린 문서", clicked: CheckedFile },
  { default: Star, name: "중요한 문서", clicked: ClicekdStar },
  { default: Share, name: "공유 문서", clicked: ClickedShare },
];

export const SIDEBAR_ITEM_SECOND = [
  { default: Recent, name: "최근 문서", clicked: ClickedRecent },
  { default: Bookmark, name: "찜한 문서", clicked: ClickedBookmark },
];

export const SIDEBAR_ITEM_THIRD = [
  { default: Trash, name: "휴지통", clicked: ClickedTrash },
  { default: Cloud, name: "저장 용량", clicked: ClickedCloud },
];
