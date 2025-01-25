import { FiMail, FiLock } from "react-icons/fi";

import { Container, Form, BackgroundImg } from "./styles";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { GoBack } from "../../components/GoBack"
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password })
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return(
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input
          icon={FiMail}
          type="email"
          placeholder="E-mail"
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          icon={FiLock}
          type="password"
          placeholder="Senha"
          onChange={e => setPassword(e.target.value)}
        /> 

        <Button title="Entrar" type="submit" onClick={handleSignIn} />

        <GoBack to="/signup" title="Criar conta" />
      </Form>

      <BackgroundImg />
    </Container>
  )
}