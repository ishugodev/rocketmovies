/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function Scrollable({ children }) {
  return(
    <Container>
      {children}
    </Container>
  )
}