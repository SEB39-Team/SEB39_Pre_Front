import * as S from './style';

export default function QuestionBox({ onClick }) {
  return (
    <S.Layout onClick={onClick}>
      <S.LeftCol>
        <span>0 votes</span>
        <span>v 0 answers</span>
        <span>0 views</span>
      </S.LeftCol>
      <S.RightCol>
        <S.Title>
          Processing array of objects and presenting data in HTML
        </S.Title>
        <S.Content>
          I have an array of objects that I have to process. I have a script
          that displays data on a page using the ul and li tags. Screenshots
          below shows what am I trying to do: When user clicks the button, ...
        </S.Content>
        <S.Footer>
          <S.Tags>
            <button>javascript</button>
            <button>html</button>
            <button>jquery</button>
          </S.Tags>
          <S.Profile>
            <img src="https://i.pinimg.com/originals/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg" />
            <span>anonymous</span>
            <span>382k</span>
            <span>asked</span>
            <span>Jun 27, 2012 at 13:51</span>
          </S.Profile>
        </S.Footer>
      </S.RightCol>
    </S.Layout>
  );
}
