import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import LoginForm from './LoginForm';
import Logo from '../../assets/logo-stackoverflow.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
`;

const Text = styled.div`
  margin-top: 20px;
  font-size: 15px;

  span:nth-child(2) {
    color: var(--blue);
    cursor: pointer;
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const directToSignUp = () => {
    navigate('/signup');
  };
  return (
    <Wrapper>
      <img src={Logo} alt="stackoverflow logo" height={37} />
      <LoginForm />
      <Text>
        <span>{"Don't have an account ?"}</span>
        <span onClick={directToSignUp}> Sign Up</span>
      </Text>
    </Wrapper>
  );
};

export default Login;
