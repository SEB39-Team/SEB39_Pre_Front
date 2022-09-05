import styled from 'styled-components';

export const Backwall = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background: rgba(0, 0, 0, 0.75);
`;

export const Modal = styled.div`
  position: fixed;
  top: 40vh;
  left: 30%;
  width: 40%;
  height: 15%;
  z-index: 1000;
  overflow: hidden;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0px;
  border-radius: 10px;

  header {
    h2 {
      font-size: 20px;
      font-weight: 600;
    }
  }

  footer {
    display: flex;
    align-items: center;
  }
`;
