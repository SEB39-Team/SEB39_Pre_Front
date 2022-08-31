import styled from 'styled-components';

export const Layout = styled.div`
  cursor: pointer;
  width: 100%;
  margin-top: 1rem;
  display: flex;
  border-bottom: 1px solid gray;
`;
export const LeftCol = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 1.5rem;
  margin-top: 0.3rem;
  & > span {
    font-size: 1.1vmin;
    margin-bottom: 1rem;
  }
  & > span:nth-child(2) {
    background-color: green;
    color: white;
    padding: 0.3rem 0.3rem;
    border-radius: 0.3rem;
  }
  & > span:last-child {
    color: orange;
  }
`;
export const RightCol = styled.div`
  width: 85%;
`;
export const Title = styled.div`
  font-size: 1.5vmin;
  color: blue;
`;
export const Content = styled.div`
  margin-top: 1rem;
  font-size: 1.1vmin;
  line-height: 1.1vmin;
`;
export const Footer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Tags = styled.div`
  margin-top: 1rem;
  button {
    border: none;
    background-color: skyblue;
    color: blue;
    padding: 0.3rem 1rem;
    margin-right: 0.5rem;
  }
`;
export const Profile = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1vmin;
  img {
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
  }
  & > span:nth-child(2) {
    margin-right: 1rem;
  }
  & > span:nth-child(3) {
    font-weight: 800;
    margin-right: 0.5rem;
  }
  & > span:nth-child(4) {
    margin-right: 0.5rem;
  }
  margin-bottom: 2rem;
`;
