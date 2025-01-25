import styled from "styled-components";
import backgroundImg from "../../assets/bg.png";

export const Container = styled.div`
  display: flex;
  align-items: stretch;

  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 13.6rem;

  > h1 {
    color: ${({ theme }) => theme.colors.pink};
    font-size: 4.8rem;
  }
  
  > h2 {
    color: ${({ theme }) => theme.colors.white_200};
    font-size: 2.4rem;
    margin: 4.8rem 0;
  }
  
  > p {
    color: ${({ theme }) => theme.colors.white_50};
    font-size: 1.4rem;
  }

  > div {
    margin-bottom: .8rem;
  }

  > [type="button"] {
    width: 100%;

    margin-top: .8rem;
  }

  > a {
    width: fit-content;
    margin: 0 auto;

    margin-top: 4.2rem;
  }
`;

export const BackgroundImg = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  filter: brightness(.5);
`;