import * as B from "../../Styles/Button/Button.styles";
import { ButtonProps } from "../../../Data/@types/Button/Button.type";

const Button: React.FC<ButtonProps> = ({ Text, onClick, Type = "button" }) => {
  return (
    <B.StyledButton type={Type} onClick={onClick}>
      {Text}
    </B.StyledButton>
  );
};

export default Button;
