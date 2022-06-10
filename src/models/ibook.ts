interface IAgents {
  id: number;
  person: string;
  type: string;
}

interface IResourses {
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
  agents:IAgents[]
  resources:IResourses[]
}
