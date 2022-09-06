import { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import { Card, Button } from 'components';
import AuthContext from '../../store/auth-context';
import axios from 'axios';

const SignUpForm = () => {
  const navigate = useNavigate();
  const directToLogIn = () => {
    navigate('/login');
  };

  const [isLoading, setIsLoading] = useState();

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  async function submitHandler(event) {
    event.preventDefault();

    try {
      const enteredName = nameInputRef.current.value;
      const enteredEmail = emailInputRef.current.value;
      const enteredPassword = passwordInputRef.current.value;

      const signUpForm = {
        username: enteredName,
        password: enteredPassword,
        email: enteredEmail,
      };

      setIsLoading(true);

      const response = await axios.post('v1/members/join', signUpForm);
      // eslint-disable-next-line
      alert('Success !');
    } catch {
      alert('Error occured !');
    }
  }

  return (
    <S.Wrapper>
      {!isLoading && (
        <S.Title>
          Create your Stack Overflow account. It’s free and only takes a minute.
        </S.Title>
      )}
      {isLoading && <p>Sending Request....</p>}
      <Card>
        <S.Form onSubmit={submitHandler}>
          <S.Label htmlFor="name">Display name</S.Label>
          <S.Input type="name" id="name" ref={nameInputRef}></S.Input>
          <S.Label htmlFor="email">Email</S.Label>
          <S.Input
            type="email"
            id="email"
            required
            ref={emailInputRef}
          ></S.Input>
          <S.Label htmlFor="password">Password</S.Label>
          <S.Input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          ></S.Input>
          <span>
            Passwords must contain at least eight characters, including at least
            1 letter and 1 number.
          </span>
          <Button type="submit">Sign up</Button>
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
