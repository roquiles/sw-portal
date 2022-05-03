import styled from "styled-components";

export const Container = styled.div`
  padding: 1.5rem 2rem;

  h2 {
    color: var(--light-gray);
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 720px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const FilmContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (min-width: 720px) {
    width: 55rem;
    height: 35rem;
    gap: 2.5rem;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const FilmCard = styled.div`
  /* min-width: 12rem; */
  min-height: 12rem;
  border-radius: 0.75rem;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.3);

  position: relative;

  img {
    width: 100%;
    height: inherit;
  }

  div {
    transition: all 0.2s;

    position: absolute;
    border-radius: 0 0 0.75rem 0.75rem;
    bottom: 0;
    padding: 0 1.5rem;
    text-align: center;
    background: rgba(0, 0, 0, 0.9);
    min-height: 2.5rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-size: 0.8rem;
      color: var(--white);
    }
  }

  &:hover {
    div {
      background: rgba(255, 255, 255, 0.8);
    }

    p {
      color: var(--black);
    }
  }
`;
