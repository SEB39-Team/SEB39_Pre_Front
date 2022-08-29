import { useNavigate } from 'react-router-dom';
import LoginForm from 'components/LoginForm';
import Logo from 'assets/imgs/logo.svg';
import * as S from './style';
import { TopNav } from 'components';

const Login = () => {
  const navigate = useNavigate();
  const directToSignUp = () => {
    navigate('/signup');
  };
  return (
    <>
      <TopNav></TopNav>
      <S.Wrapper>
        <img src={Logo} alt="stackoverflow logo" height={37} />
        <LoginForm />
        <S.Text>
          <span>{"Don't have an account ?"}</span>
          <span onClick={directToSignUp}> Sign Up</span>
        </S.Text>
      </S.Wrapper>
    </>
  );
};

export default Login;
