import useHeader from "src/hook/common/Header/useHeader";
import Item from "./item";
import * as S from "./style";

interface SearchProps {
  files: any;
}

const Search = ({ files }: SearchProps) => {
  return (
    <S.Wrapper>
      <Item files={files}/>
    </S.Wrapper>
  );
};

export default Search;
