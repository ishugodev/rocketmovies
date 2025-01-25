import styled from "styled-components";

export const Container = styled.div`
  > header {
    background: ${({ theme }) => theme.colors.pink_dark};
    
    display: flex;
    align-items: center;
    
    height: 14.4rem;
    
    padding: 0 8rem;
    
    a {
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
    }
  }

  > main {
    display: grid;
    gap: .8rem;

    max-width: 34rem;
    
    margin: auto;

    :nth-child(4) {
      margin-top: 1.6rem;
    }

    :nth-child(6) {
      margin-top: 1.6rem;
    }

    button {
      width: 100%;
    }
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: 0 auto;

  width: 18.6rem;
  height: 18.6rem;

  margin-top: -9.5rem;
  margin-bottom: 6.4rem;
  
  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 4.8rem;
    height: 4.8rem;

    background: ${({ theme }) => theme.colors.pink};
    border-radius: 50%;
    
    position: absolute;
    bottom: 0;
    right: 0;
    
    cursor: pointer;
    
    input {
      display: none;
    }
    
    svg {
      color: ${({ theme }) => theme.colors.background_800};
      width: 1.8rem;
      height: 1.8rem;
    }
  }
`;