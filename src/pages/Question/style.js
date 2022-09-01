import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* align-items: center; */
  min-height: 100vh;
  width: 100vw;
  padding: 0px 25px;
`;
export const MainTitle = styled.h1`
  font-size: 3vmin;
  padding: 40px 0px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: white;
  width: 80%;

  label {
    font-size: 15px;
    font-weight: bold;
  }
  input {
    display: block;
    flex: 3;
    font: inherit;
    font-size: 1.5rem;
    padding: 0.35rem 0.35rem;
    border-radius: 3px;
    border: 1px solid rgb(186, 191, 196);
    margin-bottom: 20px;
    width: 100%;

    &:focus {
      outline: 3px solid rgba(10, 149, 255, 0.2);
    }
  }
  Button {
    width: 152px;
    padding: 10px;
    margin-top: 30px;
  }
`;

export const Card = styled.div`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 3px;
  padding: 24px;
  box-sizing: border-box;

  div {
    margin: 5px 0px;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;

  input::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;

  textarea {
    display: block;
    font: inherit;
    font-size: 1.5rem;
    padding: 0.35rem 0.35rem;
    border-radius: 3px;
    border: 1px solid rgb(186, 191, 196);
    margin-bottom: 20px;
    width: 100%;

    &:focus {
      outline: 3px solid rgba(10, 149, 255, 0.2);
    }
  }
`;
export const Tag = styled.div`
  display: flex;
  flex-direction: column;

  input::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;
