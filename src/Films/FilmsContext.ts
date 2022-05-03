import { createContext } from "react";
import { Film } from "../types/types";

interface FilmsContextData {
  films: Film[];
}

const FilmsContext = createContext({} as FilmsContextData);

export default FilmsContext;
