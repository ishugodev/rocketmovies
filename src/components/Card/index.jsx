/* eslint-disable react/prop-types */
import { Container } from "./styles";

import { Tag } from "../Tag";

export function Card({ data, ...rest }) {
  return(
    <Container {...rest}>
      <strong>{data.title}</strong>

      <p>{data.description}</p>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  )
}