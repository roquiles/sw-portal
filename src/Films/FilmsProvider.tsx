import { ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";
import { Film } from "../types/types";
import FilmsContext from "./FilmsContext";

interface FilmsProviderProps {
  children: ReactNode;
}

export default function FilmsProvider({ children }: FilmsProviderProps) {
  const [films, setFilms] = useState<Film[]>([]);

  async function getFilms() {
    await api.get("/films").then((response) => setFilms(response.data.results));
  }

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <FilmsContext.Provider value={{ films }}>{children}</FilmsContext.Provider>
  );
}
