import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  margin-top: 3rem;
  border-bottom: 1px solid black;
  padding-bottom: 2rem;
`;
export const HeaderCol1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.span`
  font-size: 2vmin;
  margin-left: 3rem;
`;
export const HeaderCol2 = styled.div`
  margin-left: 3rem;
  span:first-child,
  span:nth-child(3),
  span:nth-child(5) {
    opacity: 0.8;
    margin-right: 0.5rem;
    font-size: 1vmin;
  }
  & > span:nth-child(2),
  span:nth-child(4),
  span:last-child {
    margin-right: 1rem;
    font-size: 1vmin;
  }
`;
export const AskBtn = styled.button`
  width: 10rem;
  height: 4rem;
`;
