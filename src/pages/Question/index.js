import React, { useState, useRef } from 'react';
import { Button, Footer, TopNav } from 'components';
import * as S from './style';
import { BsExclamationCircleFill } from 'react-icons/bs';
import axios from 'axios';
import Dropdown from 'components/Dropdown';
import SuccessModal from 'components/SuccessModal';

const isEmpty = (value) => value.trim() === '';

const Question = () => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    title: true,
    content: true,
  });
  const [formSumitted, setFormSumitted] = useState(false);

  const titleRef = useRef('');
  const contentRef = useRef('');

  async function submitHandler(event) {
    event.preventDefault();

    try {
      const question = {
        title: titleRef.current.value,
        content: contentRef.current.value,
      };

      const enteredTitleIsValid = !isEmpty(question.title);
      const enteredContentIsValid = !isEmpty(question.content);

      setFormInputsValidity({
        title: enteredTitleIsValid,
        content: enteredContentIsValid,
      });

      const formIsValid = enteredTitleIsValid && enteredContentIsValid;

      if (!formIsValid) {
        return;
      }

      const response = await axios.post('/v1/posts', question);
    } catch {
      alert('Error occured');
    }

    setFormSumitted(true);
    titleRef.current.value = '';
    contentRef.current.value = '';
  }

  return (
    <>
      <TopNav />
      <S.MainTitle>Ask a public question</S.MainTitle>
      <S.Wrapper>
        {formInputsValidity && formSumitted && <SuccessModal />}
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
              {!formInputsValidity.title && (
                <S.ErrorMessage>
                  <span>Title is missing. </span>
                  <BsExclamationCircleFill />
                </S.ErrorMessage>
              )}
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
            {!formInputsValidity.content && (
              <S.ErrorMessage>
                <span>Body is missing.</span>
                <BsExclamationCircleFill />
              </S.ErrorMessage>
            )}
            <S.Tag>
              <label>Tags</label>
              <div>
                Add up to 5 tags to describe what your question is about
              </div>
              <input placeholder="e.g.(javascript sql-server database"></input>
            </S.Tag>
          </S.Card>
          <Button type="submit">Post your question</Button>
        </S.Form>
        <Dropdown></Dropdown>
      </S.Wrapper>
      <Footer />
    </>
  );
};

export default Question;
