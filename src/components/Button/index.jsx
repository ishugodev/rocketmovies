/* eslint-disable react/prop-types */
import { GoPlus } from "react-icons/go";

import { Container } from "./styles";

export function Button({ title, loading = false, withicon = false, invertcolor = false, ...rest }) {
  return(
    <Container
      type="button"
      disabled={loading}
      $withicon={withicon.toString()}
      $invertcolor={invertcolor.toString()}
      {...rest}
    >
      {withicon ? <GoPlus /> : ''}
      {loading ? "Carregando..." : title }
    </Container>
  )
}