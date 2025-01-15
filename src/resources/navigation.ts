import {
  sotdlIcon,
  ftdIcon,
  diceIcon,
  myzIcon,
  sr5eIcon,
  sr6eIcon,
  hipster,
} from "@/images";
import { MenuSection } from "@/types";

export const games = [
  {
    description: "A game to help you build your vocabulary in Suomi.",
    label: "Vocabulary Builder",
    path: "/games/vocabulary_builder",
  },
];

export const tools = [
  {
    icon: diceIcon,
    label: "Dice Roller",
    path: "/tools/diceroller",
  },
];

const ftdMonsters = {
  description: `A list of monsters from the 5th edition of the world's greatest roleplaying game.`,
  label: "Fifth Edition Bestiary",
  path: "/tools/five_torches_deep/fifth_edition_bestiary",
  icon: ftdIcon,
};

const ftdMaps = {
  description: `A random map generator for the using color schemes.`,
  label: "Random Map Generator",
  path: "/tools/five_torches_deep/random_map_generator",
  icon: ftdIcon,
};

const myzCreateTheZone = {
  description: `A tool to help you create the zone for your Mutant Year Zero campaign.`,
  label: "Create the Zone",
  path: "/tools/mutant_year_zero/create_the_zone",
  icon: myzIcon,
};

const sotdlEncounterBuilder = {
  description: `A tool to help you create encounters for your Shadow of the Demon Lord campaign.`,
  label: "Encounter Builder",
  path: "/tools/shadow_of_the_demon_lord/encounter_builder",
  icon: sotdlIcon,
};

const sotdlRewardsGenerator = {
  description: `A tool to help you generate rewards for your Shadow of the Demon Lord campaign.`,
  label: "Rewards Generator",
  path: "/tools/shadow_of_the_demon_lord/rewards_generator",
  icon: sotdlIcon,
};

const sotdlTravelTool = {
  description: `A tool to help you manage travel in your Shadow of the Demon Lord campaign.`,
  label: "Travel Tool",
  path: "/tools/shadow_of_the_demon_lord/travel_tool",
  icon: sotdlIcon,
};

const shadowrunMissionGenerator = {
  description: `A tool to help you create missions for your Shadowrun campaign.`,
  label: "Mission Generator",
  path: "/tools/shadowrun/mission_generator",
  icon: sr5eIcon,
};

const shadowrunRewardsCalculator = {
  description: `A tool to help you calculate rewards for your Shadowrun campaign.`,
  label: "Rewards Calculator",
  path: "/tools/shadowrun/rewards_calculator",
  icon: sr5eIcon,
};

const shadowrunNpcs = {
  description: `A tool to help you create NPCs for your Shadowrun campaign.`,
  label: "NPCs",
  path: "/tools/shadowrun/npcs",
  icon: sr6eIcon,
};

const shadowrunHeat = {
  description: `A tool to help you manage heat in your Shadowrun campaign.`,
  label: "Heat",
  path: "/tools/shadowrun/heat",
  icon: sr6eIcon,
};

export const systems = {
  ftd: {
    title: "Five Torches Deep",
    driveThruId: "264584",
    tools: {
      ftdMonsters,
      ftdMaps,
    },
    list: [ftdMonsters, ftdMaps],
  },
  myz: {
    title: "Mutant Year Zero",
    driveThruId: "139453",
    tools: {
      createTheZone: myzCreateTheZone,
    },
    list: [myzCreateTheZone],
  },
  sotdl: {
    title: "Shadow of the Demon Lord",
    driveThruId: "155572",
    tools: {
      sotdlEncounterBuilder,
      sotdlRewardsGenerator,
      sotdlTravelTool,
    },
    list: [sotdlEncounterBuilder, sotdlRewardsGenerator, sotdlTravelTool],
  },
  sr5e: {
    title: "Shadowrun 5th Edition",
    driveThruId: "115985",
    tools: {
      shadowrunMissionGenerator,
      shadowrunRewardsCalculator,
    },
    list: [shadowrunMissionGenerator, shadowrunRewardsCalculator],
  },
  sr6e: {
    title: "Shadowrun 6th Edition",
    driveThruId: "442031",
    tools: {
      shadowrunNpcs,
      shadowrunHeat,
    },
    list: [shadowrunNpcs, shadowrunHeat],
  },
};

export const rpgTools: MenuSection[] = [
  {
    label: "General",
    list: tools,
  },
  {
    label: systems.ftd.title,
    list: systems.ftd.list,
  },
  {
    label: systems.myz.title,
    list: systems.myz.list,
  },
  {
    label: systems.sotdl.title,
    list: systems.sotdl.list,
  },
  {
    label: "Shadowrun",
    list: [...systems.sr5e.list, ...systems.sr6e.list],
  },
];

export const adminTools: MenuSection[] = [
  {
    label: "General",
    list: [
      {
        description: `Login to access the admin tools.`,
        label: "Login/Logout",
        path: "/admin",
        icon: hipster,
      },
    ],
  },
  {
    label: systems.sotdl.title,
    list: [
      {
        description: `Submit new monsters to be used in the Encounter Builder.`,
        label: "Add Npcs",
        path: "/tools/shadow_of_the_demon_lord/add_npcs",
        icon: sotdlIcon,
      },
    ],
  },
];

export const navigation = {
  about: {
    label: "About",
    path: "/",
  },
  tools: {
    label: "Tools",
    path: "/tools/diceroller",
    menu: rpgTools,
  },
  games: {
    label: "Games",
    path: "/games/vocabulary_builder",
    menu: games,
  },
  admin: {
    label: "Admin",
    path: "/login",
    menu: adminTools,
  },
};
