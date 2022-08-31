import * as S from './style';

export default function QuestionDetailHeader() {
  return (
    <S.Header>
      <S.HeaderCol1>
        <S.Title>
          ESLint: TypeError: this.libOptions.parse is not a function
        </S.Title>
        <S.AskBtn>Ask Question</S.AskBtn>
      </S.HeaderCol1>
      <S.HeaderCol2>
        <span>Asked</span>
        <span>3 days ago</span>
        <span>Modified</span>
        <span>yesterday</span>
        <span>Viewed</span>
        <span>5k times</span>
      </S.HeaderCol2>
    </S.Header>
  );
}
