import styled from "styled-components";

export const Container = styled.span`
  background: ${({ theme }) => theme.colors.tag_200};
  color: ${({ theme }) => theme.colors.white_100};

  padding: .5rem 1.6rem;

  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;

  border-radius: .8rem;
`;