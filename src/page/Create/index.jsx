import { Container, Textarea, MarkerGroup } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { GoBack } from "../../components/GoBack";
import { Button } from "../../components/Button";
import { Marker } from "../../components/Marker";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function Create() {
  const [title, setTitle] = useState("");
  const [score, setScore] = useState();
  const [observation, setObservation] = useState("");
  
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    setTags(prevTags => [...prevTags, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevTags => prevTags.filter(tag => tag !== deleted));
  }

  async function handleNewMovie() {
    if(!title) {
      return alert("Digite o título do filme.");
    }

    if(!score) {
      return alert("Digite a pontuação do filme.");
    }

    if(!observation) {
      return alert("Digite a observação do filme.");
    }

    if(newTag) {
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.");
    }

    await api.post("/movies", {
      title,
      score,
      observation,
      tags
    })

    alert("Filme criado com sucesso!");
    navigate(-1);
  }

  return(
    <Container>
      <Header />

      <main>
        <GoBack haveicon to="/" title="Voltar" />

        <h1>
          Novo filme
        </h1>

        <div className="col-2">
          <Input placeholder="Título" onChange={e => setTitle(e.target.value)} />
          <Input placeholder="Sua nota (de 0 a 5)" onChange={e => setScore(e.target.value)} />
        </div>

        <Textarea placeholder="Observações" onChange={e => setObservation(e.target.value)} />

        <h2>
          Marcadores
        </h2>

        <MarkerGroup>
          {
            tags.map((tag, index) => (
              <Marker
                key={String(index)}
                value={tag}
                onClick={() => handleRemoveTag(tag)}
              />
            ))
          }

          <Marker
            toadd
            value={newTag}
            onChange={e => setNewTag(e.target.value)}
            onClick={handleAddTag}
          />
        </MarkerGroup>

        <div className="col-2">
          <Button title="Salvar" onClick={handleNewMovie} />
        </div>
      </main>
    </Container>
  )
}