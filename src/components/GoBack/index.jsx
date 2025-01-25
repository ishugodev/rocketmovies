/* eslint-disable react/prop-types */
import { FiArrowLeft } from "react-icons/fi";
import { Container } from "./styles";

export function GoBack({ to, title, haveicon = false }) {
  return(
    <Container to={to}>
      {haveicon ? <FiArrowLeft /> : ''}
      <div>{title}</div>
    </Container>
  )
}