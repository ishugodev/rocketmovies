import styled from "styled-components";

export const Container = styled.div`
  main {
    display: flex;
    flex-direction: column;
    gap: 4rem;

    padding: 4rem 8rem;

    .col-2 {
      display: flex;
      gap: 4rem;

      * {
        width: 100%;
      }
    }

    h1 {
      color: ${({ theme }) => theme.colors.white_200};
      font-size: 3.6rem;
      font-weight: 500;

      margin-top: -1.6rem;
    }

    h2 {
      color: ${({ theme }) => theme.colors.gray};
    }

    [type=button] {
      height: 5.6rem;
    }

    input, textarea {
      font-family: 'Roboto', sans-serif;
    }
  }
`;

export const Textarea = styled.textarea`
  background: ${({ theme }) => theme.colors.background_700};
  color: ${({ theme }) => theme.colors.white_200};

  resize: none;

  width: 100%;
  height: 27.4rem;

  padding: 1.9rem 1.6rem;

  border: none;
  border-radius: 1rem;

`;

export const MarkerGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;

  background: ${({ theme }) => theme.colors.background_900};

  padding: 1.6rem;

  border-radius: .8rem;
`;

