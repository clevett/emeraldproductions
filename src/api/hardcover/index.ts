import { cacheExchange, createClient, fetchExchange, gql } from "@urql/core";
import { registerUrql } from "@urql/next/rsc";

const makeClient = () => {
  return createClient({
    url: "https://api.hardcover.app/v1/graphql",
    exchanges: [cacheExchange, fetchExchange],
    suspense: true,
    fetchOptions: () => {
      const token = process.env.HARDCOVER_API_TOKEN;

      return {
        headers: { authorization: token ?? "" },
      };
    },
  });
};

export const { getClient } = registerUrql(makeClient);

export const BookListsQuery = gql`
  query {
    me(where: { username: { _eq: "cadenlevett" } }) {
      username
      lists {
        id
        name
        list_books {
          id
          book {
            images {
              url
              width
              ratio
            }
            subtitle
            title
            rating
            id
            headline
            description
            image {
              url
              width
              ratio
            }
            slug
          }
        }
      }
    }
  }
`;
