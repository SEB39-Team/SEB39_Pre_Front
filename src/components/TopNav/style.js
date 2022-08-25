import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #f8f9f9;
  border-top: 3px solid orange;
  box-shadow: 0px 0px 6px 0px;
  position: fixed;
  z-index: 999;
`;
export const Inner = styled.div`
  display: flex;
  width: 80%;
  height: 5rem;
  align-items: center;
`;
export const LogoCol = styled.div`
  display: flex;
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
    height: 3rem;
  }
  button:first-child {
    margin-right: 1rem;
    background-color: #e1ecf4;
    color: #53588a;
    border: 1px solid #53588a;
  }
  button:last-child {
    background-color: #0074cc;
    color: white;
    border: 1px solid #0074cc;
  }
`;
