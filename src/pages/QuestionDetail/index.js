import { getPostDetail } from 'api';
import {
  Footer,
  LeftNav,
  QuestionDetailHeader,
  QuestionDetailBody,
  QuestionDetailForm,
  TopNav,
} from 'components';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import * as S from './style';

export default function QuestionDetail() {
  const { pathname } = useLocation();
  const [boardData, setBoardData] = useState();

  useEffect(() => {
    getPostDetail(pathname).then((res) => setBoardData(res));
  }, [pathname]);

  return (
    <>
      <TopNav />
      <S.Container>
        <LeftNav />
        <S.Main>
          <QuestionDetailHeader title={boardData?.title} />
          <QuestionDetailBody content={boardData?.content} />
          <QuestionDetailForm />
        </S.Main>
      </S.Container>
      <Footer />
    </>
  );
}
