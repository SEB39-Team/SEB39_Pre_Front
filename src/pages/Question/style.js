import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100vw;
  padding: 0px 30px;
  box-sizing: border-box;
`;
export const MainTitle = styled.h1`
  font-size: 3vmin;
  padding: 40px 0px;
  margin-left: 30px;
`;

// export const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 100%;
//   padding: 0px 30px;
//   box-sizing: border-box;
// `;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: white;
  width: 70%;
  label {
    font-size: 15px;
    font-weight: bold;
  }
  input {
    display: block;
    /* flex: 3; */
    font: inherit;
    font-size: 1.5rem;
    padding: 0.35rem 0.35rem;
    border-radius: 3px;
    border: 1px solid rgb(186, 191, 196);
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

  @media screen and (max-width: 816px) {
    width: 100%;
  }
`;

export const Card = styled.div`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 3px;
  padding: 24px;
  box-sizing: border-box;
  background-color: white;

  label {
    margin-top: 10px;
  }

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

export const ErrorMessage = styled.div`
  color: red;
  padding-bottom: 20px;
  font-size: 13px;

  span {
    display: block;
  }

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  textarea {
    display: block;
    font: inherit;
    font-size: 1.5rem;
    padding: 0.35rem 0.35rem;
    border-radius: 3px;
    border: 1px solid rgb(186, 191, 196);
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
