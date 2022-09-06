import * as S from './style';
import logo from 'assets/imgs/logo.svg';
import { useContext } from 'react';
import { useNavigate } from 'react-router';

import AuthContext from 'store/auth-context';
import Button from 'components/Button';

export default function TopNav() {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const navigate = useNavigate();

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <>
      <S.Container>
        <S.Inner>
          <S.LogoCol>
            <img src={logo} onClick={() => navigate('/')} />
          </S.LogoCol>
          <S.SearchCol>
            <input placeholder="Search..." />
          </S.SearchCol>
          {!isLoggedIn && (
            <S.SignCol>
              <Button onClick={() => navigate('/login')}>Log in</Button>
              <Button onClick={() => navigate('/signup')}>Sign up</Button>
            </S.SignCol>
          )}
          {isLoggedIn && <Button onClick={logoutHandler}>Logout</Button>}
        </S.Inner>
      </S.Container>
      <S.Blank />
    </>
  );
}
