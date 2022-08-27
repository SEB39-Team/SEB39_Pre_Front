import * as S from './style';
import logo from 'assets/imgs/logo.svg';
import { useNavigate } from 'react-router';

export default function TopNav() {
  const navigate = useNavigate();

  return (
    <>
      <S.Container>
        <S.Inner>
          <S.LogoCol>
            <img src={logo} />
          </S.LogoCol>
          <S.SearchCol>
            <input placeholder="Search..." />
          </S.SearchCol>
          <S.SignCol>
            <button onClick={() => navigate('/login')}>Log in</button>
            <button onClick={() => navigate('/signup')}>Sign up</button>
          </S.SignCol>
        </S.Inner>
      </S.Container>
      <S.Blank />
    </>
  );
}
