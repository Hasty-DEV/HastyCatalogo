import { useRef, useState } from "react";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../Data/Hooks/useAuth";
import * as LF from "../../Styles/LoginForm/LoginForm.style";
import { InfinitySpin } from "react-loader-spinner";

const LoginForm: React.FC = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {

    const userEmail = emailRef?.current?.value;
    const userPassword = passwordRef?.current?.value;

    if (!userEmail || !userPassword) {
      setError("Preencha todos os campos");
      return;
    }

    setLoading(true);

    const res = signin(userEmail, userPassword);

    setLoading(false);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };
  return (
    <>
      <Input type="email" placeholder="Digite seu E-mail" ref={emailRef} />
      <Input type="password" placeholder="Digite sua Senha" ref={passwordRef} />
      <LF.labelError>{error}</LF.labelError>
      {loading && (
        <LF.Overlay>
          <InfinitySpin
            visible={true}
            width="200"
            color="#4fa94d"
            ariaLabel="infinity-spin-loading"
          />
        </LF.Overlay>
      )}
      <Button Text="Entrar" onClick={handleLogin} />
      <LF.LabelSignup>
        Não tem uma Conta?
        <LF.Strong>
          <Link to="/signup">&nbsp;Registre-se</Link>
        </LF.Strong>
      </LF.LabelSignup>
    </>
  );
};

export default LoginForm;
