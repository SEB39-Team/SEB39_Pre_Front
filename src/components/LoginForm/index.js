import React, { useState, useRef, useContext } from 'react';
//로그인 성공 후 리다이렉션
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import { Card, Button } from 'components';
import * as S from './style';
import axios from 'axios';

const LoginForm = () => {
  // 로그인 성공후 리다이렉션
  const navigate = useNavigate();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  async function submitHandler(event) {
    event.preventDefault();

    try {
      const enteredEmail = emailInputRef.current.value;
      const enteredPassword = passwordInputRef.current.value;

      setIsLoading(true);

      const response = await axios.post('/login', {
        email: enteredEmail,
        password: enteredPassword,
      });
      setIsLoading(false);
      // eslint-disable-next-line
      console.log(response);
      alert('Login Success!');

      const token = response.headers.authorization;

      authCtx.login(token);
      // eslint-disable-next-line
      console.log(token);

      navigate('/');
    } catch {
      alert('Error');
    }
  }

  return (
    <Card>
      <S.Form onSubmit={submitHandler}>
        <S.Label>Email</S.Label>
        <S.Input
          id="email"
          label="Email"
          type="email"
          required
          ref={emailInputRef}
        ></S.Input>
        <S.Label>Password</S.Label>
        <S.Input
          id="password"
          label="Password"
          type="password"
          required
          ref={passwordInputRef}
        ></S.Input>
        <Button type="submit">Log in</Button>
      </S.Form>
    </Card>
  );
};

export default LoginForm;
