import * as S from './style';
import { RiQuestionnaireFill } from 'react-icons/ri';
import { MdThumbsUpDown } from 'react-icons/md';
import { AiFillTags } from 'react-icons/ai';
import { ImTrophy } from 'react-icons/im';

const Description = () => {
  return (
    <S.Wrapper>
      <S.Title>Join the Stack Overflow community</S.Title>
      <S.TextList>
        <li>
          <div>
            <RiQuestionnaireFill />
          </div>
          <div>Get unstuck — ask a question</div>
        </li>
        <li>
          <div>
            <MdThumbsUpDown />
          </div>
          <div>Unlock new privileges like voting and commenting</div>
        </li>
        <li>
          <div>
            <AiFillTags />
          </div>
          <div>Save your favorite tags, filters, and jobs</div>
        </li>
        <li>
          <div>
            <ImTrophy />
          </div>
          <div>Earn reputation and badges</div>
        </li>
      </S.TextList>
      <S.DescriptionFooter>
        <span>
          Collaborate and share knowledge with a private group for FREE.
        </span>
        <span>Get Stack Overflow for Teams free for up to 50 users.</span>
      </S.DescriptionFooter>
    </S.Wrapper>
  );
};

export default Description;
