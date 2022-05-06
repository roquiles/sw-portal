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

export interface DataType {
  people: ResourceType[];
  peopleRequestHasFinished: boolean;
  starships: ResourceType[];
  starshipsRequestHasFinished: boolean;
  planets: ResourceType[];
  planetsRequestHasFinished: boolean;
  vehicles: ResourceType[];
  vehiclesRequestHasFinished: boolean;
  species: ResourceType[];
  speciesRequestHasFinished: boolean;
}

export interface PosterMapperType {
  [key: string]: string;
}

export interface ResourceType {
  name: string;
  url: string;
}
