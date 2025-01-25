import styled from "styled-components";

export const Container = styled.div`
  main {
    padding: 4rem 8rem;

    .col-2 {
      display: flex;
      align-items: center;
      gap: 2rem;

      margin-top: 2.4rem;
    }

    h1 {
      font-size: 3.6rem;
      font-weight: 500;
    }

    .stars {
      display: flex;
      gap: 1rem;

      svg {
        width: 2rem;
        height: 2rem;
        color: ${({ theme }) => theme.colors.pink};
      }
    }

    span {
      font-family: 'Roboto', sans-serif;
    }

    .user {
      display: flex;
      align-items: center;
      gap: .8rem;

      img {
        width: 1.6rem;
        height: 1.6rem;

        border: 1px solid ${({ theme }) => theme.colors.stroke};
        border-radius: 50%;
      }
    }

    .date {
      display: flex;
      align-items: center;
      gap: .8rem;

      svg {
        width: 1.6rem;
        height: 1.6rem;
        color: ${({ theme }) => theme.colors.pink};
      }
    }

    .tagGroup {
      display: flex;
      gap: .8rem;

      padding: 4rem 0;
    }
  }
`;