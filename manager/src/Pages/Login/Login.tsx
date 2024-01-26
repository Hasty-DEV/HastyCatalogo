import * as L from "../../Ui/Styles/Login/Login.style";
import LoginForm from "../../Ui/Partials/LoginForm/LoginForm";

const Login: React.FC = () => {
  return (
    <L.Container>
      <L.Label>SISTEMA DE LOGIN</L.Label>
      <L.Content>
        <LoginForm />
      </L.Content>
    </L.Container>
  );
};

export default Login;
