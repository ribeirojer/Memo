import { ReactNode } from "react";
import { Wrapper } from "./Button";

type Props = {
  color: string;
  theme: string;
  children: ReactNode;
};

const Button = ({ color, theme, children }: Props) => {
  return (
    <Wrapper color={color} theme={theme}>
      {children}
    </Wrapper>
  );
};

export default Button;
