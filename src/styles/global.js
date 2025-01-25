import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background: ${({ theme }) => theme.colors.background_800};
    color: ${({ theme }) => theme.colors.white};
  }
  
  body * {
    font-family: 'Roboto Slab', sans-serif;
    font-size: 1.6rem;
  }
`;