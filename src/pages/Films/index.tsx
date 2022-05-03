import { useContext } from "react";
import Header from "../../Components/Header";
import FilmsContext from "../../Films/FilmsContext";
import { posterMapper } from "../../utils/constants";
import { Container, FilmCard, FilmContainer } from "./styles";
import loadingSpinner from "../../assets/spinner.svg";

export default function Films() {
  const { films, isLoading } = useContext(FilmsContext);

  console.log(films);

  return (
    <>
      <Header />
      <Container>
        {isLoading ? (
          <div>
            <img src={loadingSpinner} alt="loading" />
          </div>
        ) : (
          <>
            <h2>Choose an episode</h2>
            <FilmContainer>
              {films.map((film) => {
                const poster = posterMapper[`episode${film.episode_id}`];
                console.log(poster);

                return (
                  <FilmCard
                    style={{
                      backgroundImage: "url(" + poster + ")",
                      backgroundSize: "cover",
                    }}
                  >
                    <div>
                      <p>{`Episode ${film.episode_id}: ${film.title}`}</p>
                    </div>
                  </FilmCard>
                );
              })}
            </FilmContainer>
          </>
        )}
      </Container>
    </>
  );
}
