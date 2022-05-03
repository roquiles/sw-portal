import { ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";
import { Film } from "../types/types";
import FilmsContext from "./FilmsContext";

interface FilmsProviderProps {
  children: ReactNode;
}

export default function FilmsProvider({ children }: FilmsProviderProps) {
  const [films, setFilms] = useState<Film[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getFilms() {
    await api.get("/films").then((response) => setFilms(response.data.results));
    setIsLoading(false);
  }

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <FilmsContext.Provider value={{ films, isLoading }}>
      {children}
    </FilmsContext.Provider>
  );
}
