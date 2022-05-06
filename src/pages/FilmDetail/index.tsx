import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../Components/Header";
import FilmsContext from "../../Films/FilmsContext";
import { Film } from "../../types/types";
import { posterMapper } from "../../utils/constants";
import { formatDate } from "../../utils/helpers";
import { Container, InfosContainer, ListContainer } from "./styles";

export default function FilmDetail() {
  const { films, getResources } = useContext(FilmsContext);
  const { filmId } = useParams() as { filmId: string };
  const [characters, setCharacters] = useState<any>([]);
  const [planets, setPlanets] = useState<(string | undefined)[]>([]);
  const [vehicles, setVehicles] = useState<(string | undefined)[]>([]);
  const [starships, setStarships] = useState<(string | undefined)[]>([]);
  const [species, setSpecies] = useState<(string | undefined)[]>([]);

  const film = films.find((film) => film.episode_id === parseInt(filmId));
  const poster = posterMapper[`episode${film?.episode_id}`];

  useEffect(() => {
    setCharacters(getResources(film as Film, "people"));
    setPlanets(getResources(film as Film, "planets"));
    setVehicles(getResources(film as Film, "vehicles"));
    setStarships(getResources(film as Film, "starships"));
    setSpecies(getResources(film as Film, "species"));
  }, [film, getResources]);

  return (
    <>
      <Header />
      <Container>
        <InfosContainer>
          <button>
            <Link to={"/films"}>&larr; Back</Link>
          </button>
          <section>
            <h1>
              Episode {film?.episode_id}: {film?.title}
            </h1>

            <hr />

            <div>
              <p>
                <span>Release Date: </span>
                {formatDate(film?.release_date as string)}
              </p>
              <p>
                <span>Director: </span> {film?.director}
              </p>
              <p>
                <span>Producer(s): </span> {film?.producer}
              </p>
              <p id="abstract">
                <span>Abstract: </span>
                {film?.opening_crawl}
              </p>
            </div>
          </section>

          <div id="row_1">
            <ListContainer>
              <h2>Characters</h2>
              <hr />

              <table>
                <tbody>
                  {characters.map((character: string) => (
                    <tr key={character}>
                      <td>{character}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ListContainer>
          </div>

          <ListContainer>
            <h2>Planets</h2>
            <hr />

            <table>
              <tbody>
                {planets.map((planet) => (
                  <tr key={planet}>
                    <td>{planet}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ListContainer>

          <ListContainer>
            <h2>Vehicles</h2>
            <hr />

            <table>
              <tbody>
                {vehicles.map((vehicle) => (
                  <tr key={vehicle}>
                    <td>{vehicle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ListContainer>

          <ListContainer>
            <h2>Starships</h2>
            <hr />

            <table>
              <tbody>
                {starships.map((starship) => (
                  <tr key={starship}>
                    <td>{starship}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ListContainer>

          <ListContainer>
            <h2>Species</h2>
            <hr />

            <table>
              <tbody>
                {species.map((species) => (
                  <tr key={species}>
                    <td>{species}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ListContainer>
        </InfosContainer>

        <div>
          <img src={poster} alt="poster" />
        </div>
      </Container>
    </>
  );
}
