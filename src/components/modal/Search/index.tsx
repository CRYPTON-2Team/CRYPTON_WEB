import useHeader from "src/hook/common/Header/useHeader";
import Item from "./item";
import * as S from "./style";
import { MyFile } from "src/types/file/file.types";

interface SearchProps {
  files: MyFile[];
}

const Search = ({ files }: SearchProps) => {
  console.log("search", files);
  return (
    <S.Wrapper>
      <Item files={files} />
    </S.Wrapper>
  );
};

export default Search;
