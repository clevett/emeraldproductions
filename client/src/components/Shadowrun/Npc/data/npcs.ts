import asad from "../imgs/asad.png";
import bishada from "../imgs/bishada.png";
import remy from "../imgs/remy.png";
import detective from "../imgs/detective.png";
import micky from "../imgs/micky.png";
import jac from "../imgs/jac.png";
import yoriko from "../imgs/yoriko.png";
import finch from "../imgs/finch.png";
import gerald from "../imgs/gerald.png";

enum tags {
  BIOTECH = "Biotech",
  FIXER = "Fixer",
  GRAY_WOLVES = "Grey Wolves",
  JOHNSON = "Johnson",
  SHADOWRUNNER = "Shadowrunner",
  SHADOWRUNNERS = "Shadowrunners",
  TAMANOUS = "Tamanous",
  TECHNOMANCER = "Technomancer",
  WUXING = "Wuxing",

  ARES = "Ares",

  KNIGHT_ERRANT = "Knight Errant",

  YAKUZA = "Yakuza",
  FENCE = "Fence",
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
  NETWORKING = "Networking is all about putting the right people in the  same room, getting them to talk, and hopefully launching them on a mutually beneficial relationship.",
  SERVICES = "This is a special kind of favor. Contacts who perform this kind of service have a job to do, and they’re using their skills on your behalf for a form of payment besides the usual cash. ",
  SUPPORT = "These contacts may not have power, a job that can be exploited, or money you can borrow, but dammit they’ve got your back. Some may have some talent, a cool toy that you don’t know how to use, or maybe they just have a place for you to crash. More often support contacts are the friends and minor contacts that are not necessarily a big part of the shadowrunner’s business, but play a role in the other aspects of his life.",
  SWAG = "You want something, other people have it. With any  luck, your contact is one of these other people. You  also might be able to sell them some goods you picked up while on the job.",
}

export const npcs = [
  {
    alias: [
      `Ahmet Ali Sezer (Turkey)`,
      `Volkan Galip (UCAS)`,
      `Asad Awads (United Kingdom)`,
    ],
    connection: 4,
    professional: 7,
    description:
      "Ahmet was born in Istanbul were he was trained as a mercenary for the Grey Wolves. He married his husband, Kamil, young and raised three children together (Taskin, Said, Zhara). \n He entered the shadows as a augmented street samurai where the paycheck was bigger, if no less dangerous, than mercenary work. ",
    img: asad,
    name: "Asad",
    tags: [tags.FIXER, tags.GRAY_WOLVES, tags.SHADOWRUNNERS],
    type: Type.SERVICES,
    flaws: ["Adulterer", "Untreated PTSD"],
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
    connection: 3,
    professional: 5,
    description:
      "Levy Bishop is a Wuxing security spider from Seattle, UCAS who turned to the shadows after his mother's death in a Wuxing factory explosion. As Bishada he established the GKings (Grid Kings), a techonmancer tribe. They promote universal Matrix access, technomancer rights, and expose malicious acts against the technomancers by corporate interests.",
    img: bishada,
    name: "Bishada",
    tags: [tags.SHADOWRUNNER, tags.TECHNOMANCER, tags.WUXING],
    type: Type.LEGWORK,
    flaws: ["Vanity", "Incompetent outside Matrix"],
    virtues: ["Compassionate", "Loyal"],
    knowledge: ["A.I.", "Hacker Groups", "Security Systems", "Resonance"],
    language: ["English", "Cantonese"],
  },
  {
    alias: [`Jerome Marrow (England), Remy Adrian (England)`],
    connection: 3,
    professional: 5,
    description:
      "Remy is street samurai from West End of London who works as a repossession contractor for the Union (B Corporation subsidy of DocWagon). He specialized in augmentation removal and has contacts in Tanamous for illegally acquired ware.",
    img: remy,
    name: "Remy",
    tags: [tags.SHADOWRUNNER, tags.TAMANOUS, tags.BIOTECH],
    type: Type.SERVICES,
    flaws: ["Callous", "Dull-witted"],
    virtues: ["Tough", "Honest"],
    knowledge: [
      "Anatomy",
      "Augementations",
      "Organ Legging",
      "Sprawl (London)",
    ],
    language: ["English"],
  },
  {
    alias: ["Daniel Bronson McCarthy (England)"],
    connection: 5,
    description:
      "Detective Daniel McCarthy is an Knight Errant SINNER investigating corporate crimes. Detectives are good at observation, and have access to old cases to go along with rap sheets and criminal SINs.",
    flaws: ["Unquestionably Loyal to Ares", "Inflexible"],
    img: detective,
    knowledge: [
      "Ares",
      "Knight Errant",
      "Corporations",
      "Law",
      "[Sprawl] London",
    ],
    language: ["English"],
    name: "Detective McCarthy",
    professional: 4,
    tags: [tags.KNIGHT_ERRANT, tags.ARES, tags.JOHNSON],
    type: Type.FAVORS,
    virtues: ["Lawful", "Solid Reputation"],
  },
  {
    alias: ["Michael 'Mickey' Walsh (England)"],
    connection: 1,
    description:
      "Mickey grew up in the East End of London to a poor family. He was a middle weight boxer until he took one too many hits. He now trains talented fighters to compete in amateur fights. His gym also serves as a place of mentoring for the neighborhood youth. They learn to defend themselves from neighborhood bullies. The best are recommended to corporate security recruiters. This recruitment program is how he pays for the gym.",
    flaws: ["Parkinson", "Aged"],
    img: micky,
    knowledge: [
      "[Sprawl] East End London",
      "Boxing",
      "Mentorship",
      "Physical Training",
    ],
    language: ["English"],
    name: "Mickey Walsh",
    professional: 2,
    tags: ["Boxer", "Physical Trainer"],
    type: Type.SUPPORT,
    virtues: ["Integrity", "Disciplined"],
  },
  {
    alias: ["Six", "Kayden Fisher (England)"],
    connection: 3,
    description:
      "Jacquin was a sinnless street rat grew into a muscle bound enforcer. She has muscle replacements and a smuggling compartment installed in order to sneak contraband into prison. She earned the nickname Six due to the sixth finger on her right hand. Her loyalty is first to the Lost MC.",
    flaws: ["Arrogant", "Bad Rep"],
    img: jac,
    knowledge: ["Crime", "Go-Gangs", "Law Enforcement Corps"],
    language: ["English"],
    name: "Jac",
    professional: 3,
    tags: ["Go-gang Enforcer"],
    type: Type.NETWORKING,
    virtues: ["Strong Willed", "Intimidating"],
  },
  {
    alias: ["Asakura Yoriko"],
    connection: 3,
    description: "",
    flaws: ["Unforgiving", "Vengeful"],
    img: yoriko,
    knowledge: ["Corporate Business", "Law", "Local Politics"],
    language: ["English", "Japanese"],
    name: "Yoriko",
    professional: 3,
    tags: [tags.YAKUZA, "Inagawa-kai kyodai"],
    type: Type.NETWORKING,
    virtues: ["Defender", "Forward thinking"],
  },
  {
    alias: [],
    connection: 2,
    professional: 1,
    description:
      "Finch is a pawn broker sees people come in and out, hears their stories of hardship, and knows a few of their routines. He’s good at buying and selling goods but never reveal's his customer's secrets.",
    img: finch,
    name: "Finch",
    tags: [tags.FENCE, "Pawn Broker"],
    type: Type.SWAG,
    flaws: ["Shady", "Untrustworthy"],
    virtues: ["Shrewd", "Tight Lipped"],
    knowledge: ["Item Appraisal", "Street Rumors"],
    language: ["English"],
  },
  {
    alias: ["James Conway Gerald (England)"],
    connection: 2,
    professional: 1,
    description:
      "Antique dealer who fences valuable collection items to sell to high end clients.",
    img: gerald,
    name: "James C. Gerald",
    tags: [tags.FENCE, "Antique Dealer"],
    type: Type.SWAG,
    flaws: ["Snobbish", "Coward"],
    virtues: ["Calculating", "Compromising"],
    knowledge: ["Antique", "High Society", "Art"],
    language: ["English", "Sperethiel"],
  },
];

// {
//   alias: [],
//   connection: ,
//   professional: ,
//   description: "",
//   img: ,
//   name: "",
//   tags: [],
//   type: Type.,
//   flaws: [],
//   virtues: [],
//   knowledge: [,],
//   language: [],
// },
