import * as S from './style';
import logo from 'assets/imgs/logo.png';

export default function TopNav() {
  return (
    <S.Container>
      <S.Inner>
        <S.LogoCol>
          <img src={logo} />
        </S.LogoCol>
        <S.SearchCol>
          <input placeholder="Search..." />
        </S.SearchCol>
        <S.SignCol>
          <button>Log in</button>
          <button>Sign up</button>
        </S.SignCol>
      </S.Inner>
    </S.Container>
  );
}
