import fivetorchesdeep from "../imgs/ttrpgs/fivetorchesdeep.jpg";
import sotdl from "../imgs/ttrpgs/sotdl.png";
import shadowrun5e from "../imgs/ttrpgs/shadowrun5e.png";
import { FiveTorchesDeepMonsters } from "../components/FiveTorchesDeep/FiveTorchesDeepMonsters";
import { RandomMapGenerator } from "../components/FiveTorchesDeep/RandomMapGenerator";
import { EncounterBuilder } from "../components/ShadowOfTheDemonLord/EncounterBuilder";
import { RewardsGenerator } from "../components/ShadowOfTheDemonLord/RewardsGenerator";
import { TravelTool } from "../components/ShadowOfTheDemonLord/TravelTool";

export const ftdList = [
  {
    label: "5th Edition Monsters",
    href: "/five_torches_deep/5e_monsters",
    iconType: fivetorchesdeep,
    element: <FiveTorchesDeepMonsters />,
  },
  {
    label: "Random Map Generator",
    href: "/five_torches_deep/random_map_generator",
    iconType: fivetorchesdeep,
    element: <RandomMapGenerator />,
  },
];

export const sotdlList = [
  {
    label: "Encounter Builder",
    href: "/shadow_of_the_demon_lord/encounter_builder",
    iconType: sotdl,
    element: <EncounterBuilder />,
  },
  {
    label: "Rewards Generator",
    href: "/shadow_of_the_demon_lord/rewards_generator",
    iconType: sotdl,
    element: <RewardsGenerator />,
  },
  {
    label: "Travel Tool",
    href: "/shadow_of_the_demon_lord/travel_tool",
    iconType: sotdl,
    element: <TravelTool />,
  },
];

export const shadowrunList = [
  {
    label: "Mission Generator",
    href: "/shadowrun/mission_creation",
    iconType: shadowrun5e,
    element: null,
  },
  {
    label: "Rewards Calculator",
    href: "/shadowrun/rewards_calculator",
    iconType: shadowrun5e,
    element: null,
  },
];

export const routes = [...ftdList, ...sotdlList, ...shadowrunList];