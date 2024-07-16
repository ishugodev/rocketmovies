import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  display: block;

  background: ${({ theme }) => theme.colors.pink_dark};
  color: ${({ theme }) => theme.colors.white_200};
  
  width: 100%;

  padding: 3.2rem;

  text-align: left;
  text-decoration: none;

  border: none;
  border-radius: 1.6rem;

  margin-bottom: 2.4rem;

  > strong {
    font-size: 2.4rem;
  }

  > p {
    color: ${({ theme }) => theme.colors.gray};
    
    margin-top: 1.6rem;
  }

  > footer {
    width: 100%;
    
    margin-top: 2rem;
  }
`;