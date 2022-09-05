import { useNavigate } from 'react-router';

import Button from 'components/Button';
import * as S from './style';

export default function QuestionDetailHeader({ title }) {
  const navigate = useNavigate();
  return (
    <S.Header>
      <S.HeaderCol1>
        <S.Title>{title}</S.Title>
        <Button onClick={() => navigate('/ask')}>Ask Question</Button>
      </S.HeaderCol1>
      <S.HeaderCol2>
        <span>Asked</span>
        <span>3 days ago</span>
        <span>Modified</span>
        <span>yesterday</span>
        <span>Viewed</span>
        <span>5k times</span>
      </S.HeaderCol2>
    </S.Header>
  );
}
