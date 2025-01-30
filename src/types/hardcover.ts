export type HardcoverBook = {
  images: {
    url: string;
  };
  subtitle: string;
  title: string;
  rating: string;
  id: string;
  headline: string;
  description: string;
  image: {
    url: string;
    width: number;
  };
  slug: string;
};

export type HardcoverList = {
  name: string;
  id: string;
  list_books: {
    id: string;
    book: HardcoverBook;
  }[];
};

export type HardcoverMe = {
  username: string;
  lists: HardcoverList[];
};
