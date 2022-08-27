import styled from 'styled-components';

export const Container = styled.div`
  width: 10%;
  border-right: 1px solid black;
  position: fixed;
  height: 100vmin;
  z-index: 400;
`;
export const NaviList = styled.li`
  cursor: pointer;
  width: 100%;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.isPath ? '#F1F2F3' : 'white')};
  border-right: ${(props) => (props.isPath ? '3px solid orange' : 'none')};
  font-weight: ${(props) => (props.isPath ? '1000' : '500')};
`;
export const Blank = styled.div`
  width: 10%;
`;
