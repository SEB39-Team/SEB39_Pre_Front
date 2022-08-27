import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
`;
export const Main = styled.div`
  width: 70%;
`;
export const QuestionRow = styled.div`
  margin-top: 3rem;
  margin-left: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-size: 3vmin;
  }
  button {
    background-color: #0074cc;
    color: white;
    border: none;
    width: 10rem;
    height: 4rem;
  }
`;
export const FilterRow = styled.div`
  display: flex;
  margin-left: 3rem;
  margin-top: 3rem;
  align-items: center;
  justify-content: space-between;
  & > span {
    font-size: 1.5vmin;
  }
  padding-bottom: 1rem;
  border-bottom: 1px solid black;
`;
export const BtnCol = styled.div`
  button {
    background-color: white;
    border: 1px solid gray;
    height: 3.5rem;
  }
  & > button:nth-child(3) {
    span {
      background-color: blue;
      color: white;
      padding: 0rem 0.5rem;
    }
  }
  & > button:last-child {
    margin-left: 2rem;
    background-color: #b3d3ea;
    color: blue;
  }
`;
