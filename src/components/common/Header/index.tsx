// // import React, { useEffect, useState } from "react";
// // import * as S from "./style";
// // import DropDown from "src/assets/DropDown.svg";
// // import Search from "src/assets/search.svg";
// // import Setting from "src/assets/Setting.svg";
// // import Bell from "src/assets/bell.svg";
// // import Avatar from "src/assets/Avatar.svg";
// // import useHeader from "src/hook/common/Header/useHeader";
// // import SearchModal from "src/components/modal/Search/index";
// // import { HEADER_DROPDOWN_ITEMS } from "src/constants/common/Header/header.constants";
// // import { useCallback } from "react";
// // import { searchStore } from "src/stores/home/search/search.stores";
// // import { MyFile } from "src/types/file/file.types";

// // const Header = () => {
// //   const { isclicked, item, keyword, handleClicked, handleItemName } = useHeader();
// //   const [search, setSearch] = useState<string>("");
// //   const [filteredValue, setFilteredValue] = useState<MyFile[]>([]);

// //   const SearchStore = searchStore((state) => state.file);

// //   console.log(SearchStore);

// //   const handleSearchKeyword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
// //     const newValue = e.target.value;
// //     setSearch(newValue);
// //   }, []);

// //   const SearchHandle = () => {
// //     const filteredData = SearchStore.filter((item) => {
// //       return Object.values(item).join("").toLowerCase().includes(search.toLowerCase());
// //     });
// //     setFilteredValue(filteredData);
// //   };

// //   return (
// //     <S.HeaderWrap>
// //       <div style={{ width: "620px", height: "48px", display: "flex", flexDirection: "column", position: "relative" }}>
// //         <S.InputWrap>
// //           <S.DropDownButton onClick={handleClicked}>
// //             <S.DropDownItem isclicked={isclicked}>
// //               <span>{item}</span>
// //               <img src={DropDown} alt="" />
// //             </S.DropDownItem>
// //             <S.DropDown isvisible={isclicked}>
// //               {HEADER_DROPDOWN_ITEMS.map((item, idx) => (
// //                 <span key={idx} onClick={() => handleItemName(item)}>
// //                   {item}
// //                 </span>
// //               ))}
// //             </S.DropDown>
// //           </S.DropDownButton>
// //           <input
// //             placeholder="저자, 제목등을 입력해주세요."
// //             value={search}
// //             onChange={handleSearchKeyword}
// //             onKeyUp={SearchHandle}
// //           />
// //           <img src={Search} alt="" />
// //         </S.InputWrap>
// //       </div>
// //       <S.UtilityWrap>
// //         <img src={Setting} />
// //         <img src={Bell} />
// //         <img src={Avatar} />
// //       </S.UtilityWrap>
// //       {search && <SearchModal files={filteredValue} />}
// //     </S.HeaderWrap>
// //   );
// // };

// // export default Header;

// import React, { useEffect, useState, useCallback } from "react";
// import * as S from "./style";
// import DropDown from "src/assets/DropDown.svg";
// import SearchIcon from "src/assets/search.svg"; // 이름 변경: Search -> SearchIcon
// import Setting from "src/assets/Setting.svg";
// import Bell from "src/assets/bell.svg";
// import Avatar from "src/assets/Avatar.svg";
// import useHeader from "src/hook/common/Header/useHeader";
// import SearchModal from "src/components/modal/Search/index";
// import { HEADER_DROPDOWN_ITEMS } from "src/constants/common/Header/header.constants";
// import { searchStore } from "src/stores/home/search/search.stores";
// import { MyFile } from "src/types/file/file.types";

// const Header = () => {
//   const { isclicked, item, handleClicked, handleItemName } = useHeader();
//   const [search, setSearch] = useState<string>("");
//   const [filteredValue, setFilteredValue] = useState<MyFile[]>([]);

//   const SearchStore = searchStore((state) => state.file);

//   const handleSearchKeyword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
//     const newValue = e.target.value;
//     setSearch(newValue);
//   }, []);

//   const SearchHandle = useCallback(() => {
//     // 검색어가 비어 있는 경우, 모든 데이터를 초기화 또는 전체 데이터로 설정
//     if (!search) {
//       setFilteredValue(SearchStore); // 또는 []로 초기화
//       return;
//     }
//     // filteredData는 fileName 속성을 문자열로 필터링
//     const filteredData = SearchStore.filter((item) => {
//       // fileName이 문자열인지 확인
//       const fileName = item.fileName || ""; // fileName이 undefined인 경우 대비
//       return fileName.toLowerCase().includes(search.toLowerCase());
//     });

//     setFilteredValue(filteredData);
//   }, [search, SearchStore]); // SearchStore가 동적으로 변하지 않는다면 종속성에서 제외 가능

//   useEffect(() => {
//     console.log("Current search input:", search);
//     console.log("Current SearchStore data:", SearchStore);
//     SearchHandle();
//   }, [search, SearchHandle]);

//   return (
//     <S.HeaderWrap>
//       <div style={{ width: "620px", height: "48px", display: "flex", flexDirection: "column", position: "relative" }}>
//         <S.InputWrap>
//           <S.DropDownButton onClick={handleClicked}>
//             <S.DropDownItem isclicked={isclicked}>
//               <span>{item}</span>
//               <img src={DropDown} alt="Dropdown icon" />
//             </S.DropDownItem>
//             <S.DropDown isvisible={isclicked}>
//               {HEADER_DROPDOWN_ITEMS.map((item, idx) => (
//                 <span key={idx} onClick={() => handleItemName(item)}>
//                   {item}
//                 </span>
//               ))}
//             </S.DropDown>
//           </S.DropDownButton>
//           <input
//             placeholder="저자, 제목등을 입력해주세요."
//             value={search}
//             onChange={handleSearchKeyword}
//             // onKeyUp={SearchHandle} // 제거: useEffect를 사용하여 처리
//           />
//           <img src={SearchIcon} alt="Search icon" onClick={SearchHandle} />
//         </S.InputWrap>
//       </div>
//       <S.UtilityWrap>
//         <img src={Setting} alt="Settings icon" />
//         <img src={Bell} alt="Bell icon" />
//         <img src={Avatar} alt="Avatar icon" />
//       </S.UtilityWrap>
//       {search && <SearchModal files={filteredValue} />}
//     </S.HeaderWrap>
//   );
// };

// export default Header;

// import React, { useEffect, useState, useCallback } from "react";
// import * as S from "./style";
// import DropDown from "src/assets/DropDown.svg";
// import SearchIcon from "src/assets/search.svg"; // 이름 변경: Search -> SearchIcon
// import Setting from "src/assets/Setting.svg";
// import Bell from "src/assets/bell.svg";
// import Avatar from "src/assets/Avatar.svg";
// import useHeader from "src/hook/common/Header/useHeader";
// import SearchModal from "src/components/modal/Search/index";
// import { HEADER_DROPDOWN_ITEMS } from "src/constants/common/Header/header.constants";
// import { searchStore } from "src/stores/home/search/search.stores";
// import { MyFile } from "src/types/file/file.types";

// const Header = () => {
//   const { isclicked, item, handleClicked, handleItemName } = useHeader();
//   const [search, setSearch] = useState<string>("");
//   const [filteredValue, setFilteredValue] = useState<MyFile[]>([]);

//   // searchStore가 변경될 때마다 데이터를 로드합니다.
//   const SearchStore = searchStore((state) => state.file);

//   const handleSearchKeyword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
//     const newValue = e.target.value;
//     setSearch(newValue);
//   }, []);

//   const SearchHandle = useCallback(() => {
//     if (!search.trim()) {
//       setFilteredValue(SearchStore);
//       return;
//     }

//     const filteredData = SearchStore.filter((item) => {
//       const fileName = item.fileName || "";
//       // 한글 및 영어 문자열 비교 로그 출력
//       console.log(`Comparing: '${fileName}' with search term: '${search}'`);
//       return fileName.toLowerCase().includes(search);
//     });

//     setFilteredValue(filteredData);
//   }, [search, SearchStore]);

//   useEffect(() => {
//     console.log("Current search input:", search);
//     console.log("Current SearchStore data:", SearchStore);
//     SearchHandle();
//   }, [search, SearchStore, SearchHandle]);

//   return (
//     <S.HeaderWrap>
//       <div style={{ width: "620px", height: "48px", display: "flex", flexDirection: "column", position: "relative" }}>
//         <S.InputWrap>
//           <S.DropDownButton onClick={handleClicked}>
//             <S.DropDownItem isclicked={isclicked}>
//               <span>{item}</span>
//               <img src={DropDown} alt="Dropdown icon" />
//             </S.DropDownItem>
//             <S.DropDown isvisible={isclicked}>
//               {HEADER_DROPDOWN_ITEMS.map((item, idx) => (
//                 <span key={idx} onClick={() => handleItemName(item)}>
//                   {item}
//                 </span>
//               ))}
//             </S.DropDown>
//           </S.DropDownButton>
//           <input
//             placeholder="저자, 제목등을 입력해주세요."
//             value={search}
//             onChange={handleSearchKeyword}
//             // onKeyUp={SearchHandle} // 제거: useEffect를 사용하여 처리
//           />
//           <img src={SearchIcon} alt="Search icon" onClick={SearchHandle} />
//         </S.InputWrap>
//       </div>
//       <S.UtilityWrap>
//         <img src={Setting} alt="Settings icon" />
//         <img src={Bell} alt="Bell icon" />
//         <img src={Avatar} alt="Avatar icon" />
//       </S.UtilityWrap>
//       {search && <SearchModal files={filteredValue} />}
//     </S.HeaderWrap>
//   );
// };

// export default Header;

import React, { useEffect, useState, useCallback } from "react";
import * as S from "./style";
import DropDown from "src/assets/DropDown.svg";
import SearchIcon from "src/assets/search.svg"; // 이름 변경: Search -> SearchIcon
import Setting from "src/assets/Setting.svg";
import Bell from "src/assets/bell.svg";
import Avatar from "src/assets/Avatar.svg";
import useHeader from "src/hook/common/Header/useHeader";
import SearchModal from "src/components/modal/Search/index";
import { HEADER_DROPDOWN_ITEMS } from "src/constants/common/Header/header.constants";
import { searchStore } from "src/stores/home/search/search.stores";
import { MyFile } from "src/types/file/file.types";

const Header = () => {
  const { isclicked, item, handleClicked, handleItemName } = useHeader();
  const [search, setSearch] = useState<string>("");
  const [filteredValue, setFilteredValue] = useState<MyFile[]>([]);

  // searchStore가 변경될 때마다 데이터를 로드합니다.
  const SearchStore = searchStore((state) => state.file);

  const handleSearchKeyword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearch(newValue);
  }, []);

  const SearchHandle = useCallback(() => {
    if (!search.trim()) {
      setFilteredValue(SearchStore);
      return;
    }

    const searchLower = search.toLowerCase().trim();
    const filteredData = SearchStore.filter((item) => {
      const fileName = item.fileName || "";
      const fileNameLower = fileName.toLowerCase().trim();

      // 한글 및 영어 문자열 비교 로그 출력
      console.log(`Comparing: '${fileNameLower}' with search term: '${searchLower}'`);
      return fileNameLower.includes(searchLower);
    });

    setFilteredValue(filteredData);
  }, [search, SearchStore]);

  useEffect(() => {
    console.log("Current search input:", search);
    console.log("Current SearchStore data:", SearchStore);
    SearchHandle();
  }, [search, SearchStore, SearchHandle]);

  return (
    <S.HeaderWrap>
      <div style={{ width: "620px", height: "48px", display: "flex", flexDirection: "column", position: "relative" }}>
        <S.InputWrap>
          <S.DropDownButton onClick={handleClicked}>
            <S.DropDownItem isclicked={isclicked}>
              <span>{item}</span>
              <img src={DropDown} alt="Dropdown icon" />
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
            // onKeyUp={SearchHandle} // 제거: useEffect를 사용하여 처리
          />
          <img src={SearchIcon} alt="Search icon" onClick={SearchHandle} />
        </S.InputWrap>
      </div>
      <S.UtilityWrap>
        <img src={Setting} alt="Settings icon" />
        <img src={Bell} alt="Bell icon" />
        <img src={Avatar} alt="Avatar icon" />
      </S.UtilityWrap>
      {search && <SearchModal files={filteredValue} />}
    </S.HeaderWrap>
  );
};

export default Header;
