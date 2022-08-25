import styled from 'styled-components';
import logo from 'assets/imgs/logo.png';

export default function TopNav() {
  return (
    <Container>
      <Inner>
        <LogoCol>
          <img src={logo} />
        </LogoCol>
        <SearchCol>
          <input placeholder="Search..." />
        </SearchCol>
        <SignCol>
          <button>Log in</button>
          <button>Sign up</button>
        </SignCol>
      </Inner>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #f8f9f9;
  border-top: 3px solid orange;
  box-shadow: 0px 0px 6px 0px;
  position: fixed;
  z-index: 999;
`;
const Inner = styled.div`
  display: flex;
  width: 80%;
  height: 5rem;
  align-items: center;
`;
const LogoCol = styled.div`
  display: flex;
  flex: 2;
  img {
    width: 12rem;
    height: fit-content;
  }
`;
const SearchCol = styled.div`
  display: flex;
  flex: 8;
  input {
    width: 90%;
    height: 2.5rem;
  }
`;
const SignCol = styled.div`
  display: flex;
  flex: 2;
  button {
    height: 3rem;
  }
  button:first-child {
    margin-right: 1rem;
    background-color: #e1ecf4;
    color: #53588a;
    border: 1px solid #53588a;
  }
  button:last-child {
    background-color: #0074cc;
    color: white;
    border: 1px solid #0074cc;
  }
`;
