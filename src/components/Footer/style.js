import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 30vh;
  background-color: black;
  color: white;
  z-index: 999;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 15px 10px;
  box-sizing: border-box;
`;

export const LogoContainer = styled.div`
  max-width: 35px;
  overflow: hidden;
  width: 10%;
  margin-top: 0;
`;

export const MenuContainer = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 70%;
  li {
    display: inline-block;
    margin-right: 20px;
  }
  h2 {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 20px;
  }
`;

export const Submenu = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    margin-bottom: 10px;
  }
`;

export const SnsContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: center;
  align-items: center;
  a {
    display: inline-block;
    color: white;
    text-decoration-line: none;
    margin-right: 10px;
  }
`;
