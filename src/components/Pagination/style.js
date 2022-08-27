import styled from 'styled-components';

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  & > button {
    margin-right: 0.5rem;
    border: 1px solid black;
    background-color: inherit;
    border-radius: 0.3rem;
    font-size: 1.1vmin;
  }
  margin-bottom: 10rem;
  & > span {
    display: flex;
    align-items: flex-end;
    margin: 0 1rem;
  }
`;
