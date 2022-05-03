import { createContext } from "react";
import { Film } from "../types/types";

interface FilmsContextData {
  films: Film[];
  isLoading: boolean;
}

const FilmsContext = createContext({} as FilmsContextData);

export default FilmsContext;
