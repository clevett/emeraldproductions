import { Suspense } from "react";
import { BookList } from "@/components/Booklist";

import { getClient, BookListsQuery } from "@/api/hardcover";
import { HardcoverList } from "@/types";

export const Bookshelf = async () => {
  const { data, error } = await getClient().query(BookListsQuery, {});

  if (error) return <p>Oh no... {error.message}</p>;

  const { lists } = data.me[0];

  const getSortedBooks = (listName: string): HardcoverList => {
    return lists.find((list: { name: string }) => list.name === listName);
  };

  const influential = getSortedBooks("Influential");
  const professional = getSortedBooks("Professional");

  return (
    <Suspense fallback={<p>Loading...</p>}>
      {influential && <BookList list={influential} />}
      {professional && <BookList list={professional} />}
    </Suspense>
  );
};
