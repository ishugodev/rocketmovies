import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background: ${({ theme }) => theme.colors.background_700};

  width: 100%;
  
  border-radius: 1rem;
  
  > input {
    background: none;
    color: ${({ theme }) => theme.colors.white_200};

    font-size: 1.4rem;
    
    width: 100%;
    
    padding: 2rem 1.4rem;
    
    border: none;
    border-radius: 1rem;
  }


  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_placeholder};
  }
  
  > svg {
    color: ${({ theme }) => theme.colors.gray_placeholder};
    margin-left: 1.2rem;
  }
`;