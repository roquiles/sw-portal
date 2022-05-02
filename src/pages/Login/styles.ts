import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: "Starjedi";
    font-size: 3.5rem;
    color: var(--yellow);
    margin-bottom: 0;
  }

  h2 {
    font-family: "Starjhol";
    font-size: 1.4rem;
    margin: -1rem auto 2rem;
  }

  form {
    width: 20rem;
    background: var(--dark-gray);
    padding: 2.5rem 3rem 3.5rem;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    font-family: "Poppins", sans-serif;

    h3 {
      margin-bottom: 1.5rem;
      font-size: 1.5rem;
      font-weight: 800;
      align-self: center;
    }

    label {
      font-weight: bold;
    }

    input {
      font-family: "Poppins", sans-serif;
      height: 2rem;
      border: 0;
      border-radius: 0.25rem;
      background: var(--black);
      color: var(--white);
      margin-bottom: 1.75rem;
      padding: 0 0.5rem;
    }

    button {
      background: var(--yellow);
      border: 0;
      width: 60%;
      height: 3rem;
      align-self: center;
      color: var(--black);
      font-family: "Starjedi";
      border-radius: 2rem;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;
