import React from 'react';
import * as S from './style';
import { useNavigate } from 'react-router';
import { TopNav, LeftNav, QuestionBox, Pagination, Footer } from 'components';

export default function Home() {
  const navigate = useNavigate();
  const directToQuestion = () => {
    navigate('/ask');
  };
  return (
    <>
      <TopNav />
      <S.Container>
        <LeftNav />
        <S.Main>
          <S.QuestionRow>
            <span>All Questions</span>
            <button onClick={directToQuestion}>Ask Question</button>
          </S.QuestionRow>
          <S.FilterRow>
            <span>123 questions</span>
            <S.BtnCol>
              <button>Newest</button>
              <button>Active</button>
              <button>
                Bountied <span>312</span>
              </button>
              <button>Unanswered</button>
              <button>More v</button>
              <button>Filter</button>
            </S.BtnCol>
          </S.FilterRow>
          {[...Array(15)].map((item, index) => (
            <React.Fragment key={index}>
              <QuestionBox />
            </React.Fragment>
          ))}
          <Pagination />
        </S.Main>
      </S.Container>
      <Footer />
    </>
  );
}
