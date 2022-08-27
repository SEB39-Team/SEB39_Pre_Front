import { useLocation, useNavigate } from 'react-router';
import * as S from './style';

export default function LeftNav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <S.Container>
        <ul>
          <S.NaviList isPath={pathname === '/'} onClick={() => navigate('/')}>
            Questions
          </S.NaviList>
          <S.NaviList
            isPath={pathname === '/tags'}
            onClick={() => navigate('/tags')}
          >
            Tags
          </S.NaviList>
          <S.NaviList
            isPath={pathname === '/users'}
            onClick={() => navigate('/users')}
          >
            Users
          </S.NaviList>
        </ul>
      </S.Container>
      <S.Blank />
    </>
  );
}
