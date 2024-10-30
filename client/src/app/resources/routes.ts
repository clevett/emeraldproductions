import {
  sotdlIcon,
  ftdIcon,
  diceIcon,
  myzIcon,
  sr5eIcon,
  sr6eIcon,
} from "@/app/images";
import { StaticImageData } from "next/image";

export type Link = {
  label: string;
  path: string;
  icon?: StaticImageData;
};

export const navigation = {
  about: {
    label: "About",
    path: "/",
  },
  tools: {
    label: "TTRPG Tools",
    path: "/tools/diceroller",
  },
  diceroller: {
    label: "Dice Roller",
    path: "/tools/diceroller",
  },
  games: {
    label: "Vocabulary Builder",
    path: "/games",
  },
};

export const tools = [
  {
    icon: diceIcon,
    label: "Dice Roller",
    path: "/diceroller",
  },
];

const ftdMonsters = {
  description: `A list of monsters from the 5th edition of the world's greatest roleplaying game.`,
  label: "Fifth Edition Bestiary",
  path: "/five_torches_deep/fifth_edition_bestiary",
  icon: ftdIcon,
};

const ftdMaps = {
  description: `A random map generator for the using color schemes.`,
  label: "Random Map Generator",
  path: "/five_torches_deep/random_map_generator",
  icon: ftdIcon,
};

const myzCreateTheZone = {
  description: `A tool to help you create the zone for your Mutant Year Zero campaign.`,
  label: "Create the Zone",
  path: "/mutant_year_zero/create_the_zone",
  icon: myzIcon,
};

const sotdlEncounterBuilder = {
  description: `A tool to help you create encounters for your Shadow of the Demon Lord campaign.`,
  label: "Encounter Builder",
  path: "/shadow_of_the_demon_lord/encounter_builder",
  icon: sotdlIcon,
};

const sotdlRewardsGenerator = {
  description: `A tool to help you generate rewards for your Shadow of the Demon Lord campaign.`,
  label: "Rewards Generator",
  path: "/shadow_of_the_demon_lord/rewards_generator",
  icon: sotdlIcon,
};

const sotdlTravelTool = {
  description: `A tool to help you manage travel in your Shadow of the Demon Lord campaign.`,
  label: "Travel Tool",
  path: "/shadow_of_the_demon_lord/travel_tool",
  icon: sotdlIcon,
};

const shadowrunMissionGenerator = {
  description: `A tool to help you create missions for your Shadowrun campaign.`,
  label: "Mission Generator",
  path: "/shadowrun/mission_generator",
  icon: sr5eIcon,
};

const shadowrunRewardsCalculator = {
  description: `A tool to help you calculate rewards for your Shadowrun campaign.`,
  label: "Rewards Calculator",
  path: "/shadowrun/rewards_calculator",
  icon: sr5eIcon,
};

const shadowrunNpcs = {
  description: `A tool to help you create NPCs for your Shadowrun campaign.`,
  label: "NPCs",
  path: "/shadowrun/npcs",
  icon: sr6eIcon,
};

const shadowrunHeat = {
  description: `A tool to help you manage heat in your Shadowrun campaign.`,
  label: "Heat",
  path: "/shadowrun/heat",
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

export const rpgTools = [
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
