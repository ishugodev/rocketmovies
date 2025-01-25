/* eslint-disable react/prop-types */
import { FiX, FiPlus  } from "react-icons/fi";

import { Container } from "./styles";

export function Marker({ value, onClick, toadd = false, ...rest }){
  return(
    <Container
      $toadd={toadd}
    >
      <input
        type="text"
        value={value}
        placeholder="Novo marcador"
        readOnly={!toadd}
        {...rest}
      />  
      {
        toadd ?
          <button
            type="button"
            onClick={onClick}
            className={toadd ? "button-add" : "button-delete"}
          >
            <FiPlus />
          </button>
        :
          <button
            type="button"
            onClick={onClick}
            className={toadd ? "button-add" : "button-delete"}
          >
            <FiX />
          </button>
      }
    </Container>
  )
}