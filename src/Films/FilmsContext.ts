import { createContext } from "react";
import { DataType, Film } from "../types/types";

interface FilmsContextData {
  films: Film[];
  isLoading: boolean;
  data: DataType;
  getResources: (
    film: Film,
    resource: "people" | "starships" | "planets" | "vehicles" | "species"
  ) => string[];
  getFilms: () => Promise<void>;
  getEntireData: (
    resource: "people" | "starships" | "planets" | "vehicles" | "species",
    pageNum?: number
  ) => Promise<void>;
}

const FilmsContext = createContext({} as FilmsContextData);

export default FilmsContext;
