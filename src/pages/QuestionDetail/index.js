import {
  Footer,
  LeftNav,
  QuestionDetailHeader,
  QuestionDetailBody,
  QuestionDetailForm,
  TopNav,
} from 'components';
import styled from 'styled-components';
import * as S from './style';

export default function QuestionDetail() {
  return (
    <>
      <TopNav />
      <S.Container>
        <LeftNav />
        <S.Main>
          <QuestionDetailHeader />
          <QuestionDetailBody />
          <QuestionDetailForm />
        </S.Main>
      </S.Container>
      <Footer />
    </>
  );
}
