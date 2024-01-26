import { useState } from "react";
import Input from "../../Ui/Components/Input/Input";
import Button from "../../Ui/Components/Button/Button";
import * as R from "../../Ui/Styles/Register/Register.styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Data/Hooks/useAuth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleRegister = () => {
    if (!email || !emailConf || !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };

  return (
    <R.Container>
      <R.Label>SISTEMA DE LOGIN</R.Label>
      <R.Content>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <R.labelError>{error}</R.labelError>
        <Button Text="Inscrever-se" onClick={handleRegister} />
        <R.LabelSignin>
          Já tem uma conta?
          <R.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </R.Strong>
        </R.LabelSignin>
      </R.Content>
    </R.Container>
  );
};

export default Register;
