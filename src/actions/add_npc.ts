"use server";

export const addNpc = (formData: {
  get: (name: string) => FormDataEntryValue | null;
}) => {
  const name = formData.get("name");
  const descriptor = formData.get("descriptor");
  const difficulty = formData.get("difficulty");
  const source = formData.get("source");

  fetch(`${process.env.URL}/api/shadow_of_the_demon_lord/npc`, {
    method: "POST",
    body: JSON.stringify({
      monster: {
        name,
        descriptor,
        difficulty,
        source,
      },
    }),
  });

  console.log("AddNpc");
};
