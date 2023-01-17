import { Wrapper } from "./Input";

type Props = {
  type: string;
  text: string;
  placeholder: string;
  handleOnChange: any;
  value: string;
};

function Input({ type, text, placeholder, handleOnChange, value }: Props): JSX.Element {
  return (
    <Wrapper>
      <label>{text}:</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
      />
    </Wrapper>
  );
}

export default Input;
