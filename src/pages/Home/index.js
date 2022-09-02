import React, { useState, useCallback, useEffect } from 'react';
import * as S from './style';
import { useNavigate } from 'react-router';
import { TopNav, LeftNav, QuestionBox, Pagination, Footer } from 'components';
import QuestionList from 'components/QuesitonList/QuestionList';
// import { useEffect } from 'react/cjs/react.production.min';

export default function Home() {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState({ data: [], pageInfo: null });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchQuestionsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/v1/posts?page=1&size=10');

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const data = await response.json();
      // // eslint-disable-next-line
      // console.log(data);

      setQuestions(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchQuestionsHandler();
  }, [fetchQuestionsHandler]);

  // // eslint-disable-next-line
  // console.log(questions);

  let content = <p>Found no content</p>;
  if (questions.data && questions.data.length) {
    content = (
      <QuestionList
        onClick={() => navigate(`/questions/${index}`)}
        questions={questions}
      />
    );
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }
  return (
    <>
      <TopNav />
      <S.Container>
        <LeftNav />
        <S.Main>
          <S.QuestionRow>
            <span>All Questions</span>
            <button onClick={() => navigate('/ask')}>Ask Question</button>
          </S.QuestionRow>
          <S.FilterRow>
            <span>{questions.data.length}</span>
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
          <section>{content}</section>
          {/* {[...Array(15)].map((item, index) => (
            <React.Fragment key={index}>
              <QuestionBox onClick={() => navigate(`/questions/${index}`)} />
            </React.Fragment>
          ))} */}
          <Pagination />
        </S.Main>
      </S.Container>
      <Footer />
    </>
  );
}
