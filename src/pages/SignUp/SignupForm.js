import { useNavigate } from 'react-router-dom';

import Card from '../../../src/components/UI/Card';
import Button from '../../../src/components/UI/Button';

import styled from 'styled-components';

const Wrapper = styled.div`
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  text-align: center;
  line-height: 30px;
  font-size: 2.1rem;
  max-width: 421px;
  margin-bottom: 15px;
  @media screen and (min-width: 815px) {
    display: none;
  }
`;

const Form = styled.form`
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

const Label = styled.label`
  display: block;
  font-weight: bold;
  flex: 1;
  color: rgb(35, 38, 41);
  margin-bottom: 5px;
`;

const Input = styled.input`
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

const Text = styled.div`
  font-size: 15px;
  margin-top: 20px;

  span:nth-child(2) {
    color: var(--blue);
    cursor: pointer;
  }
`;

const SignUpForm = () => {
  const navigate = useNavigate();
  const directToLogIn = () => {
    navigate('/login');
  };

  return (
    <Wrapper>
      <Title>
        Create your Stack Overflow account. It’s free and only takes a minute.
      </Title>
      <Card>
        <Form>
          <Label>Display name</Label>
          <Input></Input>
          <Label>Email</Label>
          <Input></Input>
          <Label>Password</Label>
          <Input></Input>
          <span>
            Passwords must contain at least eight characters, including at least
            1 letter and 1 number.
          </span>
          <Button>Sign up</Button>
          <span>
            By clicking “Sign up”, you agree to our terms of service, privacy
            policy and cookie policy
          </span>
        </Form>
      </Card>
      <Text>
        <span>Already have an account? </span>
        <span onClick={directToLogIn}>Log in</span>
      </Text>
    </Wrapper>
  );
};

export default SignUpForm;
