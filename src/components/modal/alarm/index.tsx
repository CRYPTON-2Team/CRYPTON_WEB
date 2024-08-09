import Item from "./item";
import * as S from "./style";

const Alarm = () => {
  return (
    <div>
      <S.MainWrapper>
        <S.TitleWrapper>
          <S.Title>알림</S.Title>
        </S.TitleWrapper>
        <Item />
      </S.MainWrapper>
    </div>
  );
};

export default Alarm;
