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
  themeColor: Theme;
  value: number;
};
export type RollResults = {
  modifier: number;
  mods?: Mods[];
  qty: Qty;
  rolls: DiceRoll[];
  side: Sides;
  value: number;
};

type Mods = {
  expr: {
    type: "number";
    value: number;
  };
  highlow: "h";
  type: "keep";
};

export type NotationObject = {
  groupId?: number;
  id?: number;
  mods?: Mods[];
  qty: Qty;
  rolls?: Roll[];
  sides: Sides;
  themeColor?: Theme;
  value?: number;
};

export type Notation = string | NotationObject | NotationObject[];
