/* eslint-disable react/prop-types */
import { FiX, FiPlus  } from "react-icons/fi";

import { Container } from "./styles";

export function Marker({ title, toadd = false }){
  return(
    <Container
      toadd={toadd}
    >
      { toadd ? "Novo marcador" : title }
      { toadd ? <FiPlus /> : <FiX /> }
      
    </Container>
  )
}