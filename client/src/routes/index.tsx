import fivetorchesdeep from "../imgs/ttrpgs/fivetorchesdeep.jpg";
import sotdl from "../imgs/ttrpgs/sotdl.png";
import shadowrun5e from "../imgs/ttrpgs/shadowrun5e.png";
import shadowrun6e from "../imgs/ttrpgs/shadowrun6e.png";

import {
  FiveTorchesDeepMonsters,
  RandomMapGenerator,
} from "../components/FiveTorchesDeep";

import {
  EncounterBuilder,
  RewardsGenerator,
  TravelTool,
} from "../components/ShadowOfTheDemonLord";

import {
  MissionGenerator,
  NpcCards,
  RewardsCalculator,
} from "../components/Shadowrun";

export const ftdList = [
  {
    label: "Fifth Edition Bestiary",
    path: "/five_torches_deep/5e_monsters",
    iconType: fivetorchesdeep,
    element: <FiveTorchesDeepMonsters />,
  },
  {
    label: "Random Map Generator",
    path: "/five_torches_deep/random_map_generator",
    iconType: fivetorchesdeep,
    element: <RandomMapGenerator />,
  },
];

export const sotdlList = [
  {
    label: "Encounter Builder",
    path: "/shadow_of_the_demon_lord/encounter_builder",
    iconType: sotdl,
    element: <EncounterBuilder />,
  },
  {
    label: "Rewards Generator",
    path: "/shadow_of_the_demon_lord/rewards_generator",
    iconType: sotdl,
    element: <RewardsGenerator />,
  },
  {
    label: "Travel Tool",
    path: "/shadow_of_the_demon_lord/travel_tool",
    iconType: sotdl,
    element: <TravelTool />,
  },
];

export const shadowrunList = [
  {
    label: "Mission Generator",
    path: "/shadowrun/mission_creation",
    iconType: shadowrun5e,
    element: <MissionGenerator />,
  },
  {
    label: "Rewards Calculator",
    path: "/shadowrun/rewards_calculator",
    iconType: shadowrun5e,
    element: <RewardsCalculator />,
  },
  {
    label: "Npcs",
    path: "/shadowrun/npcs",
    iconType: shadowrun6e,
    element: <NpcCards />,
  },
];

export const routes = [...ftdList, ...sotdlList, ...shadowrunList];
