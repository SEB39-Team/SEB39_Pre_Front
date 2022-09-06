import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 70vh;
  padding: 0px;
  margin-left: 20px;
  width: 30%;
  white-space: pre-wrap;
  margin-bottom: 0;

  @media screen and (max-width: 816px) {
    display: none;
  }
`;

export const Card = styled.div`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 3px;
  box-sizing: border-box;
  background-color: white;
  max-width: 270px;
  margin-bottom: 25px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 270px;
  box-sizing: border-box;
  background-color: #f8f9f9;
  padding: 10px 10px;
  border: 0.5px solid rgba(0, 0, 0, 0.05);
  font-size: 15px;
`;

export const CardBody = styled.div`
  padding: 10px 10px;
`;

export const FirstCardList = styled.div`
  padding: 10px 0px;

  li {
    display: inline-block;
  }
  div:last-child {
    padding: 10px 10px 10px 20px;
  }
`;

export const FirstCardListHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  padding: 10px 10px;
  width: 270px;
  border: 0.5px solid rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  span {
    margin-right: 10px;
    font-size: 13px;
  }
`;
