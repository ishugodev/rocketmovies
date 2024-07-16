import { Container, Textarea, MarkerGroup } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { GoBack } from "../../components/GoBack";
import { Button } from "../../components/Button";
import { Marker } from "../../components/Marker";

export function Create() {
  return(
    <Container>
      <Header />

      <main>
        <GoBack haveicon to="/" title="Voltar" />

        <h1>
          Novo filme
        </h1>

        <div className="col-2">
          <Input placeholder="Título" />
          <Input placeholder="Sua nota (de 0 a 5)" />
        </div>

        <Textarea placeholder="Observações" />

        <h2>
          Marcadores
        </h2>

        <MarkerGroup>
          <Marker title="React" />
          <Marker title="" toadd />
        </MarkerGroup>

        <div className="col-2">
          <Button title="Excluir filme" invertcolor />
          <Button title="Salvar alterações" />
        </div>
      </main>
    </Container>
  )
}