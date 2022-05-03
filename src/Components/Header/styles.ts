import styled from "styled-components";

export const Container = styled.header`
  height: 6rem;
  width: 100vw;
  padding: 0 1.5rem;
  border-bottom: 1px solid var(--dark-gray);

  display: flex;
  align-items: center;
  justify-content: space-between;

  #logo {
    height: 4rem;
  }

  button {
    border: 0;
    background: var(--black);

    img {
      width: 2rem;
    }
  }
`;
