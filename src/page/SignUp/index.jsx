import { FiUser, FiMail, FiLock } from "react-icons/fi";

import { Container, Form, BackgroundImg } from "./styles";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { GoBack } from "../../components/GoBack"

export function SignUp() {
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input icon={FiUser} placeholder="Nome" />
        <Input icon={FiMail} placeholder="E-mail" />
        <Input icon={FiLock} placeholder="Senha" /> 

        <Button title="Cadastrar" />

        <GoBack to="/signin" title="Voltar para o login" />
      </Form>

      <BackgroundImg />
    </Container>
  )
}