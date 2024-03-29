export enum Options {
  EMPLOYER = "employer",
  JOB = "job",
  LOCATION = "location",
  MACGUFFIN = "macguffin",
  TWIST = "twist",
}

export type Option = `${Options}`;

export type MissionElement = {
  description: string;
  note?: string;
  result: number[];
  source: string;
  table: Option;
};

const employers = [
  {
    description: "Secret Society",
    result: [2],
    note: "(Black Lodge, Human Nation)",
    table: Options.EMPLOYER,
    source: "Shadowrun 5th Edition",
  },
  {
    description: "Political or Activist Group",
    result: [3],
    note: "(Humanis Policlub, Mothers of Metahumans)",
    table: Options.EMPLOYER,
    source: "Shadowrun 5th Edition",
  },
  {
    description: "Government Official or Agency",
    result: [4],
    table: Options.EMPLOYER,
    source: "Shadowrun 5th Edition",
  },
  {
    description: "Minor Corporation",
    result: [5, 6],
    note: "(A-level or smaller)",
    table: Options.EMPLOYER,
    source: "Shadowrun 5th Edition",
  },
  {
    description: "Megacorporation",
    result: [7, 8],
    note: "(AA-level or larger)",
    table: Options.EMPLOYER,
    source: "Shadowrun 5th Edition",
  },
  {
    description: "Criminal Syndicate",
    result: [9],
    note: "(Yakuza, Mafia)",
    table: Options.EMPLOYER,
    source: "Shadowrun 5th Edition",
  },
  {
    description: "Magical Group",
    result: [10],
    note: "(Illuminates of the New Dawn)",
    table: Options.EMPLOYER,
    source: "Shadowrun 5th Edition",
  },
  {
    description: "Private Individual",
    result: [11],
    table: Options.EMPLOYER,
    source: "Shadowrun 5th Edition",
  },
  {
    description: "Exotic or Mysterious Being",
    result: [12],
    note: "(free spirit, dragon, AI)",
    table: Options.EMPLOYER,
    source: "Shadowrun 5th Edition",
  },
];

const locations = [
  {
    description: "Bar, Club, Restaurant",
    result: [1],
    source: "Shadowrun 5th Edition",
    table: Options.LOCATION,
  },
  {
    description: "Warehouse, Loading Dock, Factory, or Other Underused Site",
    result: [2],
    source: "Shadowrun 5th Edition",
    table: Options.LOCATION,
  },
  {
    description: "Barrens District or Other Urban Hellhole",
    result: [3],
    source: "Shadowrun 5th Edition",
    table: Options.LOCATION,
  },
  {
    description: "Moving Vehicle",
    result: [4],
    source: "Shadowrun 5th Edition",
    table: Options.LOCATION,
  },
  {
    description: "Matrix Host",
    result: [5],
    source: "Shadowrun 5th Edition",
    table: Options.LOCATION,
  },
  {
    description: "Astral Space",
    result: [6],
    source: "Shadowrun 5th Edition",
    table: Options.LOCATION,
  },
];

const jobs = [
  {
    description: "Datasteal",
    result: [1],
    source: "Shadowrun 5th Edition",
    table: Options.JOB,
  },
  {
    description: "Assassination or Destruction",
    result: [2],
    source: "Shadowrun 5th Edition",
    table: Options.JOB,
  },
  {
    description: "Extraction or Insertion",
    result: [3],
    source: "Shadowrun 5th Edition",
    table: Options.JOB,
  },
  {
    description: "Misdirection",
    result: [4],
    source: "Shadowrun 5th Edition",
    table: Options.JOB,
  },
  {
    description: "Protection",
    result: [5],
    source: "Shadowrun 5th Edition",
    table: Options.JOB,
  },
  {
    description: "Delivery",
    result: [6],
    source: "Shadowrun 5th Edition",
    table: Options.JOB,
  },
];

const macguffin = [
  {
    description: "A key employee",
    result: [1],
    source: "Shadowrun 5th Edition",
    table: Options.MACGUFFIN,
  },
  {
    description: "A prototype product",
    result: [2],
    source: "Shadowrun 5th Edition",
    table: Options.MACGUFFIN,
  },
  {
    description: "Cutting-edge tech research",
    result: [3],
    source: "Shadowrun 5th Edition",
    table: Options.MACGUFFIN,
  },
  {
    description: "Bioengineered life form",
    result: [4],
    source: "Shadowrun 5th Edition",
    table: Options.MACGUFFIN,
  },
  {
    description: "Magical object",
    result: [5],
    source: "Shadowrun 5th Edition",
    table: Options.MACGUFFIN,
  },
  {
    description: "Urban building, rural location, or infrastructure object",
    result: [6],
    source: "Shadowrun 5th Edition",
    table: Options.MACGUFFIN,
  },
];

const twist = [
  {
    description: "Security is unexpectedly high",
    result: [1],
    source: "Shadowrun 5th Edition",
    table: Options.TWIST,
  },
  {
    description: "A third party is also interested",
    result: [2],
    source: "Shadowrun 5th Edition",
    table: Options.TWIST,
  },
  {
    description: "The target is not what it appears to be (group was lied to)",
    result: [3],
    source: "Shadowrun 5th Edition",
    table: Options.TWIST,
  },
  {
    description: "The job requries a rare piece of equipment",
    result: [4],
    source: "Shadowrun 5th Edition",
    table: Options.TWIST,
  },
  {
    description: "Target has been moved or is being moved",
    result: [5],
    source: "Shadowrun 5th Edition",
    table: Options.TWIST,
  },
  {
    description: "The employer decides to double-cross the runners",
    result: [6],
    source: "Shadowrun 5th Edition",
    table: Options.TWIST,
  },
];

export const mission: MissionElement[] = [
  ...employers,
  ...locations,
  ...jobs,
  ...macguffin,
  ...twist,
];
