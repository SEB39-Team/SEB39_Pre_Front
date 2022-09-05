import { useState } from 'react';
import * as S from './style';

import { firstCard, secondCard } from 'assets/data/dummyDropdownMenu';
import { AiOutlineDown } from 'react-icons/ai';

const Dropdown = (props) => {
  const [firstDropDown, setFirstDropDown] = useState(false);
  const [secondDropDown, setSecondDropDown] = useState(false);

  const firstDropDownHandler = () => {
    setFirstDropDown(!firstDropDown);
  };

  const secondDropDownHandler = () => {
    setSecondDropDown(!secondDropDown);
  };

  return (
    <>
      <S.Wrapper>
        <S.Card>
          <S.Title>
            <span>{firstCard[0].title}</span>
          </S.Title>
          <S.CardBody>
            <div>{firstCard[0].body}</div>
          </S.CardBody>
          <S.FirstCardList>
            {firstCard[0].menu.map((item) => (
              <li key={item.idx}>
                <S.FirstCardListHead>
                  <span>{item.idx}</span>
                  <span>{item.title}</span>
                  <AiOutlineDown onClick={firstDropDownHandler} />
                </S.FirstCardListHead>
                {firstDropDown && <div>{item.body}</div>}
              </li>
            ))}
          </S.FirstCardList>
        </S.Card>
        {secondCard.map((item) => (
          <S.Card key={item.id}>
            <S.Title>
              <span>{item.title}</span>
              <AiOutlineDown onClick={secondDropDownHandler} />
            </S.Title>
            {secondDropDown && <S.CardBody>{item.body}</S.CardBody>}
          </S.Card>
        ))}
      </S.Wrapper>
    </>
  );
};

export default Dropdown;
