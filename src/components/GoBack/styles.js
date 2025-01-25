import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  gap: .8rem;

  color: ${({ theme }) => theme.colors.pink};
  text-decoration: none;

  display: flex;
  align-items: center;
  
  svg {
    color: ${({ theme }) => theme.colors.pink};
  }
`;