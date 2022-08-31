import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  display: flex;
`;
export const ContentCol1 = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
  svg {
    width: 3vw;
    height: 3vh;
    color: gray;
    margin-bottom: 1.5rem;
  }
  span {
    font-size: 2vmin;
    margin-bottom: 1.5rem;
  }
`;
export const ContentCol2 = styled.div`
  flex-direction: column;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  font-size: 1.4vmin;
  line-height: 2rem;
`;
export const Tags = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
  button {
    border: none;
    background-color: skyblue;
    color: blue;
    padding: 0.3rem 1rem;
    margin-right: 0.5rem;
  }
`;
export const ContentFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const FooterCol1 = styled.div`
  span {
    font-size: 1vmin;
    margin-right: 0.6rem;
  }
  & > span:last-child {
    margin-left: 1rem;
    color: blue;
  }
`;
export const FooterCol2 = styled.div`
  width: 20%;
  background-color: #d9eaf7;
  font-size: 1vmin;
  padding: 0.4rem 0;
  padding-left: 1rem;
  margin-bottom: 2rem;
  .col {
    margin-top: 0.3rem;
    display: flex;
    align-items: center;
    img {
      width: 3rem;
      margin-right: 1rem;
    }
    span {
      color: blue;
    }
  }
`;
export const AddBtn = styled.span`
  opacity: 0.6;
  font-size: 1.3vmin;
  margin-bottom: 2rem;
`;
