import * as S from './style';
import logo from 'assets/imgs/logo.svg';
import { useNavigate } from 'react-router';
import Button from 'components/Button';

export default function TopNav() {
  const navigate = useNavigate();

  const directToLogin = () => {
    navigate('/login');
  };

  const directToSignup = () => {
    navigate('/signup');
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
          <S.SignCol>
            <Button onClick={() => navigate('/login')}>Log in</Button>
            <Button onClick={() => navigate('/signup')}>Sign up</Button>
          </S.SignCol>
        </S.Inner>
      </S.Container>
      <S.Blank />
    </>
  );
}
