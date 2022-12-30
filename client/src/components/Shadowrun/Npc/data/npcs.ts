import asad from "../imgs/asad.png";
import bishada from "../imgs/bishada.png";

enum Archtypes {
  FIXER = "Fixer",
  JOHNSON = "Johnson",
  SHADOWRUNNER = "Shadowrunner",
}

enum tags {
  FIXER = "Fixer",
  GRAY_WOLVES = "Grey Wolves",
  JOHNSON = "Johnson",
  SHADOWRUNNER = "Shadowrunner",
  SHADOWRUNNERS = "Shadowrunners",
  TECHNOMANCER = "Technomancer",
  WUXING = "Wuxing",
}

export type NPC = typeof npcs[number];

export const npcs = [
  {
    alias: [`Ahmet Ali Sezer`, `Volkan "Terminator" Galip`],
    archtype: Archtypes.FIXER,
    connection: 4,
    description:
      "Retired Shadowrunner from Turkey. Married to Kamil with three adult children.",
    img: asad,
    name: "Asad",
    tags: [tags.GRAY_WOLVES, tags.SHADOWRUNNERS],
    flaws: "Adulterer",
  },
  {
    alias: [`Benjamin Lee`],
    archtype: Archtypes.SHADOWRUNNER,
    connection: 3,
    description:
      "Bishada is the leader of the GKings (Grid Kings), a techonmancer tribe. They promote universal Matrix access, technomancer rights, and expose malicious acts against the technomancers by corporate interests.",
    img: bishada,
    name: "Bishada",
    tags: [tags.TECHNOMANCER, tags.WUXING],
    flaws: "Vanity, Incompetent outside Matrix",
  },
];
