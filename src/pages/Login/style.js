import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
`;

export const Text = styled.div`
  margin-top: 20px;
  font-size: 15px;

  span:nth-child(2) {
    color: var(--blue);
    cursor: pointer;
  }
`;
