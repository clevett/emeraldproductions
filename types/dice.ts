type Sides = number;
type Qty = number;
type Theme = string;

export type Roll = {
  collectionId: number;
  groupId: number;
  id: number;
  rollId: number;
  sides: Sides;
  theme: Theme;
  value: number;
};

type DiceRoll = {
  groupId: number;
  id: number;
  result: number;
  rollId: number;
  sides: Sides;
  theme: Theme;
  value: number;
};
export type RollResults = {
  modifier: number;
  qty: Qty;
  rolls: DiceRoll[];
  side: Sides;
  value: number;
  mods?: Mods[];
};

type Mods = {
  expr: {
    type: "number";
    value: number;
  };
  highlow: "h";
  type: "keep";
};

type NotationObject = {
  id: number;
  mods: Mods[];
  qty: Qty;
  rolls: Roll[];
  sides: Sides;
  value: number;
  groupId?: number;
};

export type Notation = string | NotationObject | NotationObject[];
