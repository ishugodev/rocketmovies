import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Scrollable } from "../../components/Scrollable";
import { Card } from "../../components/Card";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  function handlePreview(id) {
    navigate(`/preview/${id}`);
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movies?title=${search}`);
      setMovies(response.data);
    }

    fetchMovies();
  }, [search]);

  return (
    <Container>
      <Header setSearch={setSearch} />

      <main>
        <div>
          <h1>Meus filmes</h1>
          <Button to="/create" title="Adcionar filme" withicon />
        </div>

        <Scrollable>
          {movies.map((movie) => (
            <Card
              key={String(movie.id)}
              data={movie}
              onClick={() => handlePreview(movie.id)}
            />
          ))}
        </Scrollable>
      </main>
    </Container>
  );
}
