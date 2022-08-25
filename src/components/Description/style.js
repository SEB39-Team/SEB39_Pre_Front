import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 410px;
  margin-right: 20px;
  @media screen and (max-width: 816px) {
    display: none;
  }
`;

export const Title = styled.div`
  font-size: 2.3rem;
  font-weight: 600;
  margin-bottom: 30px;
`;

export const TextList = styled.ul`
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

export const DescriptionFooter = styled.div`
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
