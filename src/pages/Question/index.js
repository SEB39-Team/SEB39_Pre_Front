import React from 'react';
import { Button, TopNav } from 'components';
import * as S from './style';

const Question = () => {
  return (
    <>
      <TopNav />
      <S.Wrapper>
        <S.MainTitle>Ask a public question</S.MainTitle>
        <S.Form>
          <S.Card>
            <S.Title>
              <label>Title</label>
              <div>
                Be specific and imagine you’re asking a question to another
                person
              </div>
              <input placeholder="e.g. Is there an R function for finding the index of an element in a vector?"></input>
            </S.Title>
            <S.Body>
              <label>Body</label>
              <div>
                Include all the information someone would need to answer your
                question
              </div>
              <textarea type="text" name="body"></textarea>
            </S.Body>
            <S.Tag>
              <label>Tags</label>
              <div>
                Add up to 5 tags to describe what your question is about
              </div>
              <input placeholder="e.g.(javascript sql-server database"></input>
            </S.Tag>
          </S.Card>
          <Button className="button">Review your question</Button>
        </S.Form>
      </S.Wrapper>
    </>
  );
};

export default Question;
