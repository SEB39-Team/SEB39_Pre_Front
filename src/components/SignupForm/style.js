import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  text-align: center;
  line-height: 30px;
  font-size: 2.1rem;
  max-width: 421px;
  margin-bottom: 15px;
  @media screen and (min-width: 815px) {
    display: none;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  font-size: 1.5rem;

  span {
    color: var(--gray);
    font-size: 13px;
  }

  span:last-child {
    margin-top: 40px;
  }
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
  flex: 1;
  color: rgb(35, 38, 41);
  margin-bottom: 5px;
`;

export const Input = styled.input`
  display: block;
  flex: 3;
  font: inherit;
  padding: 0.35rem 0.35rem;
  border-radius: 3px;
  border: 1px solid rgb(186, 191, 196);
  margin-bottom: 20px;

  &:focus {
    outline: 3px solid rgba(10, 149, 255, 0.2);
  }
`;

export const Text = styled.div`
  font-size: 15px;
  margin-top: 20px;

  span:nth-child(2) {
    color: var(--blue);
    cursor: pointer;
  }
`;
