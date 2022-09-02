import React from 'react';

import QuestionBox from 'components/QuestionBox';

const QuestionList = (props) => {
  //   // eslint-disable-next-line
  //   console.log(props.questions);
  return (
    <ul>
      {props.questions.data?.map((data) => (
        <QuestionBox
          key={data.postId}
          title={data.title}
          content={data.content}
        />
      ))}
    </ul>
  );
};

export default QuestionList;
