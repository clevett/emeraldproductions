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

export const ftdList = [
  {
    icon: ftdIcon,
    label: "Fifth Edition Bestiary",
    path: "/five_torches_deep/5e_monsters",
  },
  {
    icon: ftdIcon,
    label: "Random Map Generator",
    path: "/five_torches_deep/random_map_generator",
  },
];

export const sotdlList = [
  {
    icon: sotdlIcon,
    label: "Encounter Builder",
    path: "/shadow_of_the_demon_lord/encounter_builder",
  },
  {
    icon: sotdlIcon,
    label: "Rewards Generator",
    path: "/shadow_of_the_demon_lord/rewards_generator",
  },
  {
    icon: sotdlIcon,
    label: "Travel Tool",
    path: "/shadow_of_the_demon_lord/travel_tool",
  },
];

export const shadowrunList = [
  {
    icon: sr5eIcon,
    label: "Mission Generator",
    path: "/shadowrun/mission_creation",
  },
  {
    icon: sr5eIcon,
    label: "Rewards Calculator",
    path: "/shadowrun/rewards_calculator",
  },
  {
    icon: sr6eIcon,
    label: "Npcs",
    path: "/shadowrun/npcs",
  },
  {
    icon: sr6eIcon,
    label: "Heat",
    path: "/shadowrun/heat",
  },
];

export const myzList = [
  {
    icon: myzIcon,
    label: "Create the Zone",
    path: "/myz/create_the_zone",
  },
];

export const rpgTools = [
  {
    label: "General",
    list: tools,
  },
  {
    label: "Five Torches Deep",
    list: ftdList,
  },
  {
    label: "Mutant Year Zero",
    list: myzList,
  },
  {
    label: "Shadow of the Demon Lord",
    list: sotdlList,
  },
  {
    label: "Shadowrun",
    list: shadowrunList,
  },
];
