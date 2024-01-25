import * as I from "../../Styles/Input/Input.styles";
import { InputProps } from "../../../Data/@types/Input/Input.type";
import { forwardRef } from "react";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, ...rest }, ref) => {
    return <I.StyledInput placeholder={placeholder} {...rest} ref={ref} />;
  }
);

export default Input;
