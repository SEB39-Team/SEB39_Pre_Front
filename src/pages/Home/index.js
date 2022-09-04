import React from 'react';
import * as S from './style';
import { useNavigate } from 'react-router';
import { TopNav, LeftNav, QuestionBox, Pagination, Footer } from 'components';
import { useBoardQuery } from 'hooks/useBoardQuery';

export default function Home() {
  const navigate = useNavigate();
  const { page, pageNum, setPageNum, limit, total } = useBoardQuery();

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
            <span>{total} questions</span>
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
          {page.data.map((item) => (
            <QuestionBox key={item.postId} board={item} />
          ))}
          <Pagination
            total={total}
            limit={limit}
            page={pageNum}
            setPage={setPageNum}
          />
        </S.Main>
      </S.Container>
      <Footer />
    </>
  );
}
