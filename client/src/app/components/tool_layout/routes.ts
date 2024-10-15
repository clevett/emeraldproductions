import fivetorchesdeep from "../../imgs/ttrpgs/fivetorchesdeep.jpg";
import sotdl from "../../imgs/ttrpgs/sotdl.png";
import shadowrun5e from "../../imgs/ttrpgs/shadowrun5e.png";
import shadowrun6e from "../../imgs/ttrpgs/shadowrun6e.png";
import myz from "../../imgs/ttrpgs/myz.png";
import dice from "../../imgs/icons/rolling-dices.svg";

export const tools = [
  {
    // element: <DiceRoller />,
    iconType: dice,
    label: "Dice Roller",
    path: "/diceroller",
  },
];

export const ftdList = [
  {
    // element: <FiveTorchesDeepMonsters />,
    iconType: fivetorchesdeep,
    label: "Fifth Edition Bestiary",
    path: "/five_torches_deep/5e_monsters",
  },
  {
    // element: <RandomMapGenerator />,
    iconType: fivetorchesdeep,
    label: "Random Map Generator",
    path: "/five_torches_deep/random_map_generator",
  },
];

export const sotdlList = [
  {
    // element: <EncounterBuilder />,
    iconType: sotdl,
    label: "Encounter Builder",
    path: "/shadow_of_the_demon_lord/encounter_builder",
  },
  {
    // element: <RewardsGenerator />,
    iconType: sotdl,
    label: "Rewards Generator",
    path: "/shadow_of_the_demon_lord/rewards_generator",
  },
  {
    // element: <TravelTool />,
    iconType: sotdl,
    label: "Travel Tool",
    path: "/shadow_of_the_demon_lord/travel_tool",
  },
];

export const shadowrunList = [
  {
    // element: <MissionGenerator />,
    iconType: shadowrun5e,
    label: "Mission Generator",
    path: "/shadowrun/mission_creation",
  },
  {
    // element: <RewardsCalculator />,
    iconType: shadowrun5e,
    label: "Rewards Calculator",
    path: "/shadowrun/rewards_calculator",
  },
  {
    // element: <NpcCards />,
    iconType: shadowrun6e,
    label: "Npcs",
    path: "/shadowrun/npcs",
  },
  {
    // element: <Heat />,
    iconType: shadowrun6e,
    label: "Heat",
    path: "/shadowrun/heat",
  },
];

export const myzList = [
  {
    // element: <CreateTheZone />,
    iconType: myz,
    label: "Create the Zone",
    path: "/myz/create_the_zone",
  },
];

export const routes = [
  ...tools,
  ...ftdList,
  ...sotdlList,
  ...shadowrunList,
  ...myzList,
];
