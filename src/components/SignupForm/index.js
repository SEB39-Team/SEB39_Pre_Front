import { useNavigate } from 'react-router-dom';
import * as S from './style';
import { Card, Button } from 'components';

const SignUpForm = () => {
  const navigate = useNavigate();
  const directToLogIn = () => {
    navigate('/login');
  };

  return (
    <S.Wrapper>
      <S.Title>
        Create your Stack Overflow account. It’s free and only takes a minute.
      </S.Title>
      <Card>
        <S.Form>
          <S.Label>Display name</S.Label>
          <S.Input></S.Input>
          <S.Label>Email</S.Label>
          <S.Input></S.Input>
          <S.Label>Password</S.Label>
          <S.Input></S.Input>
          <span>
            Passwords must contain at least eight characters, including at least
            1 letter and 1 number.
          </span>
          <Button>Sign up</Button>
          <span>
            By clicking “Sign up”, you agree to our terms of service, privacy
            policy and cookie policy
          </span>
        </S.Form>
      </Card>
      <S.Text>
        <span>Already have an account? </span>
        <span onClick={directToLogIn}>Log in</span>
      </S.Text>
    </S.Wrapper>
  );
};

export default SignUpForm;
