/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect, useState, useCallback } from "react";
import { api } from "../services/api";
import { DataType, Film } from "../types/types";
import FilmsContext from "./FilmsContext";

interface FilmsProviderProps {
  children: ReactNode;
}

export default function FilmsProvider({ children }: FilmsProviderProps) {
  const [films, setFilms] = useState<Film[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<DataType>({
    people: [],
    peopleRequestHasFinished: false,
    starships: [],
    starshipsRequestHasFinished: false,
    planets: [],
    planetsRequestHasFinished: false,
    vehicles: [],
    vehiclesRequestHasFinished: false,
    species: [],
    speciesRequestHasFinished: false,
  });

  async function getFilms() {
    await api.get("/films").then((response) => setFilms(response.data.results));
    setIsLoading(false);
  }

  //Função para buscar os dados em UMA página de resultados da API
  async function getPageData(
    resource: "people" | "starships" | "planets" | "vehicles" | "species",
    pageNum: number = 1
  ) {
    let pageResults = await api.get(`/${resource}/?page=${pageNum}`);
    return pageResults.data;
  }

  // Função para buscar os dados de TODAS as páginas
  const getEntireData = useCallback(
    async function (
      resource: "people" | "starships" | "planets" | "vehicles" | "species",
      pageNum: number = 1
    ) {
      if (data[`${resource}RequestHasFinished`]) {
        return;
      }
      const response = await getPageData(resource, pageNum);

      setData((prevData) => ({
        ...prevData,
        [resource]: [...prevData[resource], ...response.results],
      }));

      if (response.next) {
        getEntireData(resource, pageNum + 1);
      } else {
        setData((prevData) => ({
          ...prevData,
          [`${resource}RequestHasFinished`]: true,
        }));
      }
    },
    [data]
  );

  function getResources(
    film: Film,
    resource: "people" | "starships" | "planets" | "vehicles" | "species"
  ) {
    return film[`${resource === "people" ? "characters" : resource}`].map(
      (resourceURL) => {
        const resourceName = data[resource].find(
          (resourceData) => resourceData.url === resourceURL
        );

        return resourceName ? resourceName.name : "";
      }
    );
  }

  useEffect(() => {
    getFilms();
    getEntireData("people");
    getEntireData("starships");
    getEntireData("planets");
    getEntireData("vehicles");
    getEntireData("species");
  }, []);

  return (
    <FilmsContext.Provider
      value={{ films, isLoading, getResources, getFilms, getEntireData, data }}
    >
      {children}
    </FilmsContext.Provider>
  );
}
