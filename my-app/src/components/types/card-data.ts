export type CardData = {
  id: number;
  name: string;
  online: boolean;
  image: string;
  hashtags: string;
  transport_choice: string[];
  country: Array<{
    name: string;
    flag: string;
  }>;
  level: number;
  likes: number;
};
