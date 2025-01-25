/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";

import { Container, Profile } from "./styles";

import { Input } from "../Input";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Header({ setSearch }) {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  return (
    <Container>
      <Link to="/" className="logo">
        RocketMovies
      </Link>
      <Input
        placeholder="Pesquisar pelo título"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Profile to="/profile">
        <div>
          <Link className="username" to="/profile">
            Hugo Ishimoto
          </Link>
          <Link className="signout" onClick={handleSignOut}>
            sair
          </Link>
        </div>
        <Link className="user-image" to="/profile">
          <img src={avatarUrl} alt="Foto do usuário" />
        </Link>
      </Profile>
    </Container>
  );
}
