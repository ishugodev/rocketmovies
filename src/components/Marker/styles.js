import styled from "styled-components";

export const Container = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 1.6rem;

  /* background: ${({ theme }) => theme.colors.background_700};
  border: none;
  color: ${({ theme }) => theme.colors.white_200};

  .toAdd {
    background: transparent;
    border: 2px dashed ${({ theme }) => theme.colors.gray_placeholder};
    color: ${({ theme }) => theme.colors.gray_placeholder};
  } */
  
  background: ${({ theme, toadd }) => toadd ? "transparent" : theme.colors.background_700};
  border: ${({ theme, toadd }) => toadd ? `2px dashed ${theme.colors.gray_placeholder}` : "none"};
  color: ${({ theme, toadd }) => toadd ? theme.colors.gray_placeholder : theme.colors.white_200};
  
  > button {
    border: none;
    background: none;
  }

  

  padding: 2rem 1.6rem;
  
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;

  cursor: pointer;

  border-radius: 1rem;

  svg {
    color: ${({ theme }) => theme.colors.pink};

    font-size: 2.4rem;
  }
`;