import Dropdown from 'components/Dropdown';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  min-height: 100vh;
  padding: 0px;
  margin-left: 20px;
  width: 30%;

  @media screen and (max-width: 816px) {
    display: none;
  }
`;

const Card = styled.div`
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 3px;
  padding: 24px;
  box-sizing: border-box;
  margin-bottom: 20px;
  width: 250px;

  div {
    margin: 5px 0px;
  }
`;

const DropdownMenu = () => {
  return (
    <Wrapper>
      <Card>Dropdown</Card>
      <Card>Dropdown2</Card>
      <Card>Dropdown3</Card>
    </Wrapper>
  );
};

export default DropdownMenu;
