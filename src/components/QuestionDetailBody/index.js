import {
  AiOutlineArrowUp,
  AiOutlineArrowDown,
  AiOutlineFieldTime,
} from 'react-icons/ai';
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import * as S from './style';

export default function QuestionDetailBody({ content }) {
  return (
    <S.Content>
      <S.ContentCol1>
        <AiOutlineArrowUp />
        <span>25</span>
        <AiOutlineArrowDown />
        <BsFillBookmarkStarFill />
        <AiOutlineFieldTime />
      </S.ContentCol1>
      <S.ContentCol2>
        {content}
        <S.Tags>
          <button>node.js</button>
          <button>eslint</button>
          <button>webstorm</button>
          <button>eslintrc</button>
          <button>typescript</button>
        </S.Tags>
        <S.ContentFooter>
          <S.FooterCol1>
            <span>Share</span>
            <span>Edit</span>
            <span>Follow</span>
            <span>edited Aug 27 at 10:12</span>
          </S.FooterCol1>
          <S.FooterCol2>
            <p>asked Aug 27 at 9:55</p>
            <div className="col">
              <img src="https://i.pinimg.com/originals/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg" />
              <span>Thebluedragon</span>
            </div>
          </S.FooterCol2>
        </S.ContentFooter>
        <S.AddBtn>Add a comment</S.AddBtn>
      </S.ContentCol2>
    </S.Content>
  );
}
