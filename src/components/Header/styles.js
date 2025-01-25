import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  display: grid;
  grid-template-columns: auto 1fr auto;
  place-content: center;
  gap: 6.4rem;

  grid-area: header;

  width: 100%;
  height: 11.6rem;

  padding: 0 8rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.stroke};

  .logo {
    color: ${({ theme }) => theme.colors.pink};
    font-weight: bold;
    font-size: 2.4rem;
    text-decoration: none;

    display: flex;
    align-items: center;

    user-select: none;
    -webkit-user-select: none;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: .9rem;

  text-decoration: none;

  a {
    text-decoration: none;
  }

  > div {
    display: flex;
    flex-direction: column;

    text-align: end;

    .username {
      color: ${({ theme }) => theme.colors.white_200};
    }

    .signout {
      color: ${({ theme }) => theme.colors.gray_placeholder};
    }
  }
  
  img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.stroke};
  }
  
`;