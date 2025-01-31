export const fetchUserByEmail = async (email: string) => {
  const response = await fetch(
    `${process.env.URL}/api/login?email=${email}`,

    {
      headers: { "Content-Type": "application/json" },
      method: "GET",
    }
  );

  const { data } = await response.json();
  return data;
};
