import { Link } from "react-router-dom";

import styled from "styled-components";

export const Container = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .4rem;

  background: ${({ theme, invertcolor }) => invertcolor ? theme.colors.background_900 : theme.colors.pink};
  color: ${({ theme, invertcolor }) => invertcolor ? theme.colors.pink : theme.colors.background_800};

  text-decoration: none;

  width: auto-fit;

  padding: 1.3rem 3.2rem;

  border: none;
  border-radius: .8rem;

  cursor: pointer;

  > svg {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.black};
    font-size: 2.4rem;
  }
`;