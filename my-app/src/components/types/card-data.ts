export type CardData = {
    id: number;
    name: string;
    online: boolean;
    image: string;
    hashtags: string;
    transport: {
      plane: boolean;
      bus: boolean;
      bicycle: boolean;
      onfoot: boolean;
    };
    countries: Array<{
      name: string;
      flag: string;
    }>;
    level: number;
    likes: number;
  };
