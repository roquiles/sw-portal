import { createContext } from "react";
import { Film } from "../types/types";

interface FilmsContextData {
  films: Film[];
  isLoading: boolean;
  getResources: (
    film: Film,
    resource: "people" | "starships" | "planets" | "vehicles" | "species"
  ) => string[];
}

const FilmsContext = createContext({} as FilmsContextData);

export default FilmsContext;
