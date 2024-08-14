import { fileNameStore, searchStore } from "src/stores/home/search/search.stores";
import * as S from "./style";
import { MyFile } from "src/types/file/file.types";
import { useNavigate } from "react-router-dom";

interface SearchProps {
  files: MyFile[];
}

const Item = ({ files }: SearchProps) => {
  const navigate = useNavigate();

  const setFileName = fileNameStore((state) => state.setFileName);

  const Focus = () => {
    
  };

  console.log(files);
  return (
    <>
      {files !== undefined &&
        files?.length > 0 &&
        files !== null &&
        files.map((item, idx) => (
          <S.ContentItemWrapper
            key={idx}
            onClick={() => {
              setFileName(item.fileName);
              navigate("/upload/complete");
            }}
          >
            <S.ContetnItemMainWrapper>
              <S.SpanWrapper>
                <S.TitleSpan>
                  {item.fileName.length > 6 ? item.fileName.substring(0, 20) + "..." : item.fileName}
                </S.TitleSpan>
                <S.AuthorSpan>{item.userId}</S.AuthorSpan>
              </S.SpanWrapper>
              <S.DateSpan>{item.updatedAt.substring(0, 10)}</S.DateSpan>
            </S.ContetnItemMainWrapper>
          </S.ContentItemWrapper>
        ))}
    </>
  );
};

export default Item;
