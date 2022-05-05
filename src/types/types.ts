export interface Film {
  title: string;
  episode_id: number;
  release_date: string;
  director: string;
  producer: string;
  opening_crawl: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
}

export interface PosterMapperType {
  [key: string]: string;
}

export interface ResourceType {
  name: string;
  url: string;
}
