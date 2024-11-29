export interface FifthEdWeapon {
  name: string;
  weapon_category?: string | undefined;
  weapon_range?: string | undefined;
  [key: string]: unknown;
}

export interface FifthEditionMonster {
  name: string;
  size: string;
  type: string;
  challenge_rating: number;
  armor_class: number;

  special_abilities?: { name: string; desc: string }[];

  condition_immunities: {
    index: string;
    name: string;
    url: string;
  }[];

  damage_vulnerabilities: string[];
  damage_resistances: string[];
  damage_immunities: string[];

  speed: {
    walk: string;
    fly: string;
    swim: string;
  };

  attack_bonus: number;

  actions: {
    name: string;
    desc: string;
    usage?: {
      type: string;
      times: number;
    };
    dc?: {
      dc_type: {
        index: string;
        name: string;
        url: string;
      };
      dc_value: number;
      success_type: string;
      dc_success: string;
    };
  }[];

  [key: string]: unknown;
}
