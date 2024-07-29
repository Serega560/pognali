export type CardData = {
  id: number;
  name: string;
  online: boolean;
  image: string;
  hashtags: string;
  transport: string[];
  countries: Array<{
    name: string;
    flag: string;
  }>;
  level: number;
  likes: number;
};
