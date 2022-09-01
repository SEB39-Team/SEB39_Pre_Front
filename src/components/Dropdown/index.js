import { AiOutlineDown } from 'react-icons/ai';

const Dropdown = (props) => {
  return;
  <>
    <div>
      <span>{props.number}</span>
      <span>{props.span}</span>
      <AiOutlineDown />
    </div>
    <div>{props.body}</div>
  </>;
};

export default Dropdown;
