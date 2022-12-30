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

export enum Type {
  FAVORS = "Personal Favors",
  LEGWORK = "Legwork",
  NETWORKING = "Networking",
  SERVICES = "Shadow Service",
  SUPPORT = "Support",
  SWAG = "Swag",
}

export enum Descriptions {
  FAVORS = "This also is a special kind of favor. These contacts have power, influence, or are in a position of  authority. You want them to use that power/influence/authority to bend the rules, turn a blind eye, or whisper in someone’s ear a suggestion.",

  LEGWORK = "Legwork is chasing down the data trail and answering questions that may not be found on the Matrix.",
  NETWORKING = "Networking is all about putting the right people in the  same room, getting them to talk, and hopefully launching  them on a mutually beneficial relationship.",
  SERVICES = "This is a special kind of favor. Contacts who perform this kind of service have a job to do, and  they’re using their skills on your behalf for a form of payment besides the usual cash. ",
  SUPPORT = "These contacts may not have power, a job that can be exploited, or money you can borrow, but dammit they’ve got your back. Some may have some talent, a cool toy that you don’t know how to use, or maybe they just have a place for you to crash. More often support contacts are the friends and minor contacts that are not necessarily a big part of the shadowrunner’s business, but play a role in the other aspects of his life.",
  SWAG = "You want something, other people have it. With any  luck, your contact is one of these other people. You  also might be able to sell them some goods you picked up while on the job.",
}

export const npcs = [
  {
    alias: [`Ahmet Ali Sezer (Turkey)`, `Volkan "Terminator" Galip (UCAS)`],
    archtype: Archtypes.FIXER,
    connection: 4,
    professional: 7,
    description:
      "Ahmet was born in Istanbul were he was trained as a mercenary for the Grey Wolves. He married his husband, Kamil, young and raised three children together (Taskin, Said, Zhara). \n He entered the shadows as a augmented street samurai where the paycheck was bigger if no less dangerous than mercenary work. ",
    img: asad,
    name: "Asad",
    tags: [tags.GRAY_WOLVES, tags.SHADOWRUNNERS],
    type: Type.SERVICES,
    flaws: ["Adulterer"],
    virtues: ["Professional", "Protective"],
    knowledge: [
      "[Sprawl] Istanbul",
      "Corporate Personalities",
      "Mercenaries",
      "Shadowrunner Tricks",
    ],
    language: ["Turkish", "Arabic", "English"],
  },
  {
    alias: [`Benjamin Lee (UCAS), Levy Bishop (Wuxing)`],
    archtype: Archtypes.SHADOWRUNNER,
    connection: 3,
    professional: 5,
    description:
      "Levy Bishop is a Wuxing security spider from Seattle, UCAS who turned to the shadows after his mother's death in a Wuxing factory explosion. As Bishada he established the GKings (Grid Kings), a techonmancer tribe. They promote universal Matrix access, technomancer rights, and expose malicious acts against the technomancers by corporate interests.",
    img: bishada,
    name: "Bishada",
    tags: [tags.TECHNOMANCER, tags.WUXING],
    type: Type.LEGWORK,
    flaws: ["Vanity", "Incompetent outside Matrix"],
    virtues: ["Empathetic", "Loyal"],
    knowledge: [
      "A.I.",
      "Hacker Groups",
      "Security Systems",
      "Technomancer Tribes",
    ],
    language: ["English", "Cantonese"],
  },
];
