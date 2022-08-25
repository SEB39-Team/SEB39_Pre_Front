import styled from 'styled-components';

import { RiQuestionnaireFill } from 'react-icons/ri';
import { MdThumbsUpDown } from 'react-icons/md';
import { AiFillTags } from 'react-icons/ai';
import { ImTrophy } from 'react-icons/im';

const Wrapper = styled.div`
  width: 410px;
  margin-right: 20px;
  @media screen and (max-width: 816px) {
    display: none;
  }
`;

const Title = styled.div`
  font-size: 2.3rem;
  font-weight: 600;
  margin-bottom: 30px;
`;

const TextList = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  li {
    display: flex;
    margin-bottom: 24px;
    justify-content: flex-start;
    align-items: center;

    div:first-child {
      font-size: 20px;
      color: var(--blue);
    }
    div:last-child {
      margin-left: 10px;
    }
  }
`;

const DescriptionFooter = styled.div`
  font-size: 14px;
  color: var(--gray);
  line-height: 20px;

  span {
    display: inline-block;
  }

  span:last-child {
    color: var(--blue);
  }
`;

const Description = () => {
  return (
    <Wrapper>
      <Title>Join the Stack Overflow community</Title>
      <TextList>
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
      </TextList>
      <DescriptionFooter>
        <span>
          Collaborate and share knowledge with a private group for FREE.
        </span>
        <span>Get Stack Overflow for Teams free for up to 50 users.</span>
      </DescriptionFooter>
    </Wrapper>
  );
};

export default Description;
