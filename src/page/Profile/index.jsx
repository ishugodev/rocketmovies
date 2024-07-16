import { FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";

import { Container, Avatar } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { GoBack } from "../../components/GoBack";


export function Profile() {
  return(
    <Container>
      <header>
        <GoBack haveicon to="/" title="Voltar" />
      </header>

      <main>
        <Avatar>
          <img src="https://github.com/ishugodev.png" alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />

            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input icon={FiUser} placeholder="Nome" />
        <Input icon={FiMail} placeholder="E-mail" />
        <Input icon={FiLock} placeholder="Senha atual" />
        <Input icon={FiLock} placeholder="Nova senha" />
        <Button title="Salvar" />
      </main>
    </Container>
  )
}