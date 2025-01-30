import Image from "next/image";
import Link from "next/link";

import { Heading, HoverCard } from "@/components";
import { HardcoverBook as Book, HardcoverList as Lists } from "@/types";

export const BookList = ({ list }: { list: Lists }) => {
  const { id, name, list_books: books } = list;

  const sortedBooks = books?.sort((a, b) => {
    return a.book.title.localeCompare(b.book.title);
  });

  return (
    <div className="flex flex-col flex-wrap gap-5 lg:gap-2" key={id}>
      <Heading className="text-center" as="h3">
        {name} Reading
      </Heading>
      <ul className="flex flex-row flex-wrap justify-center gap-5 lg:gap-2">
        {sortedBooks?.map((book: { id: string; book: Book }) => (
          <li
            className="relative overflow-hidden group transition-all border border-gray-100/20 ring-accent hover:ring-1 hover:border-sky-500 rounded-l-sm rounded-r-md shadow-md block"
            key={book.id}
          >
            <HoverCard
              key={id}
              content={
                <div>
                  <Heading className="bold text-wrap break-words" as="h4">
                    {book.book.title}
                  </Heading>
                  <p className="opacity-80">{book.book.subtitle}</p>
                </div>
              }
              trigger={
                <Link
                  href={`https://hardcover.app/books/${book.book.slug}`}
                  target="_blank"
                >
                  <Image
                    className="rounded-l-sm rounded-r-md h-full"
                    alt={book.book.title}
                    src={book.book.image.url}
                    height={180}
                    width={100}
                  />
                </Link>
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
