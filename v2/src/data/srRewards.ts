export const karam = [
  {
    name: "survived",
    description: "Character survived",
    karma: 2,
  },
  {
    name: "allObjectives",
    description: "Group completed all objectives",
    karma: 2,
  },
  {
    name: "someObjectives",
    karma: 1,
    description: "Group completed some objectives",
  },
];

export const nuyen = [
  {
    name: "outnumbered3to1",
    description: "Outnumbered 3:1 in a combat situation",
  },
  {
    name: "outnumbered2to1",
    description:
      "Outnumbered 2:1 in combat by NPCs with Professiona Rating 4+ (not cumulative with above)",
  },
  {
    name: "speed",
    description:
      "Runners accomplished the task with impressive speed and/or subtlety",
  },
  {
    name: "notable",
    description:
      "Job brings runners into direct contact with a notable danger of the Sixth World (the Red Samurai, a Mitsuhama Zero Zone, etc.)",
  },
  {
    name: "critters",
    description: "Runners faced a pack of at least six critters",
  },
  {
    name: "spirits",
    description:
      "Runners encountered at least three different spirits (besides watchers) in a single combat",
  },
  {
    name: "exposure",
    description:
      "Runners risked public exposure or a raised profile as a natural part of the run",
  },
];

export enum RunType {
  COLD = "cold-hearted",
  GOOD = "good feels",
  STANDARD = "standard",
}

export enum Karma {
  COLD = -2,
  GOOD = 2,
  STANDARD = 0,
}

export const types = [
  {
    name: RunType.STANDARD,
    karma: Karma.STANDARD,
    description: "",
  },
  {
    name: RunType.GOOD,
    description:
      "Hooding, helping the little guy, taking some ‘dys’ out of ‘dystopia",
    karma: Karma.GOOD,
  },
  {
    name: RunType.COLD,
    description:
      "Wetwork, helping corps oppress people, drug running, human trafficking",
    karma: Karma.COLD,
  },
];
