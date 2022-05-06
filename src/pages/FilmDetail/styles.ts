import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  font-weight: 200;

  display: flex;
  flex-direction: column-reverse;

  & > div {
    width: 100%;
    height: 15rem;
    overflow: hidden;

    @media (min-width: 720px) {
      width: 350px;
      height: 350px;
      border-radius: 400px;
      margin: 3rem;
      box-shadow: 2px 5px 7px 5px rgba(0, 0, 0, 0.3);
    }
  }

  div > img {
    width: 100%;
    transform: translateY(-5rem);
    margin-bottom: 1rem;
  }

  button {
    border: 0;
    background: transparent;
    margin: 1rem 0;
    align-self: flex-start;

    a {
      text-decoration: none;
      color: var(--light-gray);
      font-weight: bold;
      font-size: 1.2rem;

      &:hover,
      &:active {
        text-decoration: underline;
        color: var(--yellow);
      }
    }
  }

  @media (min-width: 720px) {
    position: relative;
    flex-direction: row;

    button {
      align-self: flex-start;
      margin-left: 0;
    }
  }
`;

export const InfosContainer = styled.section`
  width: 100%;
  padding: 0.5rem 2rem 1rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-weight: normal;
    font-size: 1.4rem;
  }

  hr {
    background-color: var(--yellow);
    height: 1px;
    border: none;
    margin-bottom: 1rem;
  }
  span {
    font-weight: bold;
  }

  #abstract {
    margin-top: 1rem;
  }

  #spinner {
    align-self: center;
  }

  @media (min-width: 720px) {
    flex: 1;
    padding: 0;
    margin-left: 5rem;

    h1 {
      font-size: 2rem;
    }
  }
`;

export const ListContainer = styled.div`
  h2 {
    margin-top: 3rem;
    font-weight: bold;
    font-size: 1.3rem;
  }

  table {
    width: 100%;
    padding-left: 2rem;

    tr {
      width: 50%;
      display: inline-table;
      list-style-type: none;
      line-height: 2rem;
      padding-right: 0.75rem;
      box-sizing: border-box;
      height: auto;
    }

    tr:nth-child(odd) {
      float: left;
      width: 50%;
    }
  }

  @media (min-width: 720px) {
    table {
      padding-left: 3rem;
    }
  }
`;
