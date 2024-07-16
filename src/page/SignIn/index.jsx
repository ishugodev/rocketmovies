import { FiMail, FiLock } from "react-icons/fi";

import { Container, Form, BackgroundImg } from "./styles";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { GoBack } from "../../components/GoBack"

export function SignIn() {
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input icon={FiMail} placeholder="E-mail" />
        <Input icon={FiLock} placeholder="Senha" /> 

        <Button title="Entrar" />

        <GoBack to="/signup" title="Criar conta" />
      </Form>

      <BackgroundImg />
    </Container>
  )
}