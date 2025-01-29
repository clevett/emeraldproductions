import { gql, useQuery } from "urql";

const BookQuery = gql`
  query {
    me {
      username
    }
  }
`;

export const BookList = () => {
  const [result] = useQuery({
    query: BookQuery,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  console.log("DATA", data);

  return <p>{data.me.username}</p>;
};
