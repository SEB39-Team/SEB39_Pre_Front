import { footerTitleData } from 'assets/data/dummyFooter';

import * as S from './style';
import Logo from 'assets/imgs/logo.svg';

export default function Footer(props) {
  return (
    <S.Container>
      <S.LogoContainer>
        <img src={Logo} alt="stackoverflow logo" height={37} />
      </S.LogoContainer>
      <S.MenuContainer>
        {footerTitleData.map((data) => (
          <li key={data.id}>
            <h2>{data.title}</h2>
            <S.Submenu>
              {data.submenu.map((data) => (
                <div key={data.idx}>
                  <h4>{data.name}</h4>
                </div>
              ))}
            </S.Submenu>
          </li>
        ))}
      </S.MenuContainer>
      <S.SnsContainer>
        <a href="https://stackoverflow.blog/?blb=1">Blog</a>
        <a href="https://www.facebook.com/officialstackoverflow/">Facebook</a>
        <a href="hhttps://twitter.com/stackoverflow">Twitter</a>
        <a href="https://www.linkedin.com/company/stack-overflow/">Linkedin</a>
        <a href="https://www.instagram.com/thestackoverflow/">Instagram</a>
      </S.SnsContainer>
    </S.Container>
  );
}
