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
    &:hover {
      background: yellow;
      cursor: pointer;
      transform: translateY(-2px);
    }
  }
  margin-bottom: 10rem;
  & > span {
    display: flex;
    align-items: flex-end;
    margin: 0 1rem;
  }
`;
export const Button = styled.button`
  border: none;
  border-radius: 15px;
  padding: 8px;
  margin: 0;
  font-size: 1.4vmin;
  &:hover {
    background: yellow;
    cursor: pointer;
    transform: translateY(-2px);
  }
  &[disabled] {
    opacity: 0.4;
    cursor: revert;
    transform: revert;
  }
  &[aria-current] {
    background: orange;
    color: white;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;
