import { Link } from "react-router-dom";

import { Container, Profile } from "./styles";

import { Input } from "../Input";

export function Header() {
  return(
    <Container>
      <Link to="/" className="logo">RocketMovies</Link>
      <Input placeholder="Pesquisar pelo título" />
      <Profile to="/profile">
        <div>
          <Link className="username" to="/profile">Hugo Ishimoto</Link>
          <Link className="signout" to="signin">sair</Link>
        </div>
        <Link className="user-image" to="/profile">
          <img src="https://github.com/ishugodev.png" alt="Foto do usuário" />
        </Link>
      </Profile>
    </Container>
  )
}