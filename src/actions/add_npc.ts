"use server";

export const addNpc = async (formData: {
  get: (name: string) => FormDataEntryValue | null;
}) => {
  const name = formData.get("name");
  const descriptor = formData.get("descriptor");
  const difficulty = formData.get("difficulty");
  const source = formData.get("source");

  const response = await fetch(`${process.env.URL}/api/shadow_of_the_demon_lord/npc`, {
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

  if (!response.ok) {
    throw new Error(`Failed to add NPC: ${response.status}`);
  }
};
