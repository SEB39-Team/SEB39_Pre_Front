import React, { useRef } from 'react';
import { Button, TopNav } from 'components';
import * as S from './style';
import { AiFillPropertySafety } from 'react-icons/ai';
import axios from 'axios';
import DropdownMenu from 'components/DropdownMenu/index';

const Question = () => {
  const titleRef = useRef('');
  const contentRef = useRef('');

  async function submitHandler(event) {
    event.preventDefault();

    try {
      const question = {
        title: titleRef.current.value,
        content: contentRef.current.value,
      };

      const enteredTitleIsValid = question.title.trim() !== '';
      const enteredContentIsValid = question.content.trim() !== '';

      let formIsValid = false;
      if (enteredTitleIsValid && enteredContentIsValid) {
        formIsValid = true;
      }
      if (!formIsValid) {
        return;
      }
      // eslint-disable-next-line
      console.log(question);

      const response = await axios.post('/v1/posts', question);
      // eslint-disable-next-line
      console.log(response.data);
    } catch {
      // eslint-disable-next-line
      console.log('Error occured');
    }
  }

  return (
    <>
      <TopNav />
      <S.Wrapper>
        <S.MainTitle>Ask a public question</S.MainTitle>
        <S.Container>
          <S.Form onSubmit={submitHandler}>
            <S.Card>
              <S.Title>
                <label htmlFor="title">Title</label>
                <div>
                  Be specific and imagine you’re asking a question to another
                  person
                </div>
                <input
                  type="text"
                  id="text"
                  ref={titleRef}
                  placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                ></input>
              </S.Title>
              <S.Body>
                <label htmlFor="body">Body</label>
                <div>
                  Include all the information someone would need to answer your
                  question
                </div>
                <textarea
                  rows="12"
                  id="body"
                  type="text"
                  ref={contentRef}
                ></textarea>
              </S.Body>
              <S.Tag>
                <label>Tags</label>
                <div>
                  Add up to 5 tags to describe what your question is about
                </div>
                <input placeholder="e.g.(javascript sql-server database"></input>
              </S.Tag>
            </S.Card>
            <Button type="submit">Review your question</Button>
          </S.Form>

          <DropdownMenu></DropdownMenu>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default Question;
