import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #f8f9f9;
  border-top: 3px solid orange;
  box-shadow: 0px 0px 6px 0px;
  position: fixed;
  z-index: 999;
  box-sizing: border-box;
`;
export const Inner = styled.div`
  display: flex;
  width: 80%;
  height: 5rem;
  align-items: center;
`;
export const LogoCol = styled.div`
  display: flex;
  cursor: pointer;
  flex: 2;
  img {
    width: 12rem;
    height: fit-content;
  }
`;
export const SearchCol = styled.div`
  display: flex;
  flex: 8;
  input {
    width: 90%;
    height: 2.5rem;
  }
`;
export const SignCol = styled.div`
  display: flex;
  flex: 2;
  button {
    cursor: pointer;
    height: 3rem;
  }
  button:first-child {
    margin-right: 1rem;
    background-color: #e1ecf4;
    color: var(--blue);
    border: 1px solid var(--blue);
  }
`;
export const Blank = styled.div`
  height: 5.5rem;
`;
