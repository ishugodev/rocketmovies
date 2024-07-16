import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Scrollable } from "../../components/Scrollable";
import { Card } from "../../components/Card";

export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <div>
          <h1>Meus filmes</h1>
          <Button to="/create" title="Adcionar filme" withicon />
        </div>

        <Scrollable>
          <Card data={{
            title: 'Lorem Ipsum',
            description: 'dnawodnawodjmawoidjaiowjdw djioawjd ioawjd oiawjd ioawjdio awjdio jawdiojwa iojawio jwa idojawiod jwa iodjw oijwa iojw iowja iojwa iowja iojw ioawj ioawjdioawjdioawjdiojawdioawjduoijwadoijawidoja wiodjaw iodj ioawjd iowjad ioawji odjwa',
            tags: [
              {id: '1', name: 'action'},
              {id: '2', name: 'adventure'},
            ]
          }} />
          <Card data={{
            title: 'Lorem Ipsum',
            description: 'dnawodnawodjmawoidjaiowjdw djioawjd ioawjd oiawjd ioawjdio awjdio jawdiojwa iojawio jwa idojawiod jwa iodjw oijwa iojw iowja iojwa iowja iojw ioawj ioawjdioawjdioawjdiojawdioawjduoijwadoijawidoja wiodjaw iodj ioawjd iowjad ioawji odjwa',
            tags: [
              {id: '1', name: 'action'},
              {id: '2', name: 'adventure'},
            ]
          }} />
          <Card data={{
            title: 'Lorem Ipsum',
            description: 'dnawodnawodjmawoidjaiowjdw djioawjd ioawjd oiawjd ioawjdio awjdio jawdiojwa iojawio jwa idojawiod jwa iodjw oijwa iojw iowja iojwa iowja iojw ioawj ioawjdioawjdioawjdiojawdioawjduoijwadoijawidoja wiodjaw iodj ioawjd iowjad ioawji odjwa',
            tags: [
              {id: '1', name: 'action'},
              {id: '2', name: 'adventure'},
            ]
          }} />
          <Card data={{
            title: 'Lorem Ipsum',
            description: 'dnawodnawodjmawoidjaiowjdw djioawjd ioawjd oiawjd ioawjdio awjdio jawdiojwa iojawio jwa idojawiod jwa iodjw oijwa iojw iowja iojwa iowja iojw ioawj ioawjdioawjdioawjdiojawdioawjduoijwadoijawidoja wiodjaw iodj ioawjd iowjad ioawji odjwa',
            tags: [
              {id: '1', name: 'action'},
              {id: '2', name: 'adventure'},
            ]
          }} />
          <Card data={{
            title: 'Lorem Ipsum',
            description: 'dnawodnawodjmawoidjaiowjdw djioawjd ioawjd oiawjd ioawjdio awjdio jawdiojwa iojawio jwa idojawiod jwa iodjw oijwa iojw iowja iojwa iowja iojw ioawj ioawjdioawjdioawjdiojawdioawjduoijwadoijawidoja wiodjaw iodj ioawjd iowjad ioawji odjwa',
            tags: [
              {id: '1', name: 'action'},
              {id: '2', name: 'adventure'},
            ]
          }} />
          <Card data={{
            title: 'Lorem Ipsum',
            description: 'dnawodnawodjmawoidjaiowjdw djioawjd ioawjd oiawjd ioawjdio awjdio jawdiojwa iojawio jwa idojawiod jwa iodjw oijwa iojw iowja iojwa iowja iojw ioawj ioawjdioawjdioawjdiojawdioawjduoijwadoijawidoja wiodjaw iodj ioawjd iowjad ioawji odjwa',
            tags: [
              {id: '1', name: 'action'},
              {id: '2', name: 'adventure'},
            ]
          }} />
          <Card data={{
            title: 'Carros',
            description: 'okjpdqkjodpk ijniudwoqjdoqwjd iojodiw jdoijwqdjqiowj dioqwjq widjqw iodjqwo jdioqwjd oiqwjdio',
            tags: [
              {id: '1', name: 'corrida'},
              {id: '2', name: 'adventure'},
              {id: '3', name: 'animation'},
            ]
          }} />
          <Card data={{
            title: 'peixe',
            description: 'peixe',
            tags: [

            ]
          }} />
        </Scrollable>
      </main>
    </Container>
  )
}