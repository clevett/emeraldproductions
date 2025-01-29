import Image from "next/image";

import { Heading } from "@/components";
import { HardcoverBook as Book, HardcoverList as Lists } from "@/types";

export const BookList = ({ list }: { list: Lists }) => {
  const { id, name, list_books: books } = list;

  const sortedBooks = books?.sort((a, b) => {
    return a.book.title.localeCompare(b.book.title);
  });

  return (
    <div key={id}>
      <Heading as="h3">{name} Reading</Heading>
      <ul>
        {sortedBooks?.map((book: { id: string; book: Book }) => (
          <li key={book.id}>
            <h3>{book.book.title}</h3>
            <p>{book.book.subtitle}</p>
            <p>{book.book.headline}</p>
            <p>{book.book.description}</p>
            <p>{book.book.rating}</p>
            <Image
              alt={book.book.title}
              src={book.book.image.url}
              height={192}
              width={128}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
