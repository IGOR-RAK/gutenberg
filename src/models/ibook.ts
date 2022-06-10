export interface IAgents {
  id: number;
  person: string;
  type: string;
}

export interface IResourses {
  id: number;
  uri: string;
  type: string;
}

export interface IBook {
  id: number;
  title: string;
  description: string;
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  agents: IAgents[];
  resources: IResourses[];
}

export interface IRenders {
  id: number;
  title: string;
  description: string;
  img: string | null;
  link: string | null;
  fav:boolean
  // author: string;
}
