"use client";

import { useMemo } from "react";
import {
  UrqlProvider,
  ssrExchange,
  cacheExchange,
  fetchExchange,
  createClient,
} from "@urql/next";

import { Heading } from "@/components";
import { BookList } from "./Booklist";

export const Bookshelf = () => {
  const [client, ssr] = useMemo(() => {
    const ssr = ssrExchange({
      isClient: typeof window !== "undefined",
    });
    const client = createClient({
      exchanges: [cacheExchange, ssr, fetchExchange],
      suspense: true,
      url: "https://api.hardcover.app/v1/graphql",
      fetchOptions: () => {
        const token = process.env.HARDCOVER_API_TOKEN;

        console.log(token);

        return {
          headers: { authorization: token ?? "" },
        };
      },
    });

    return [client, ssr];
  }, []);

  return (
    <UrqlProvider client={client} ssr={ssr}>
      <Heading as="h3">Influential Reading</Heading>
      <BookList />
    </UrqlProvider>
  );
};
