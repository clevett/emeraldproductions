export default [
  {
    "name": "Brute",
    "weak": {
      attributes: ["DEX", "INT"],
      skills: ["stealth", "finesse", "perception", "tactics"]
    },
    "strong": {
      attributes: ["CON", "STR"],
      skills: ["morale", "holding the line", "resistance"]
    }
  },
  {
    "name": "Leader",
    "weak": {
      attributes: ["CON", "STR"],
      skills: ["combat", "being alone", "resistance"]
    },
    "strong": {
      attributes: ["CHA", "INT"],
      skills: ["magic", "commands", "with minions"]
    }
  },
  {
    "name": "Predator",
    "weak": {
      attributes: ["CON"],
      skills: ["resistance", "morale", "direct combat"]
    },
    "strong": {
      attributes: ["INT"],
      skills: ["offense", "stealth", "patience", "cunning"]
    }
  },
  {
    "name": "Shaper",
    "weak": {
      attributes: [],
      skills: ["melee combat", "being locked down in one place"]
    },
    "strong": {
      attributes: ["INT", "WIS"],
      skills: ["forced movement", "changing the environment"]
    }
  },
  {
    "name": "Sniper",
    "weak": {
      attributes: ["CON", "STR"],
      skills: ["melee combat, resistance, morale"]
    },
    "strong": {
      attributes: ["DEX", "WIS"],
      skills: ["ranged combat", "perception"]
    }
  },
  {
    "name": "Soldier",
    "weak": {
      attributes: [],
      skills: ["magic", "speed", "lack of leadership", "stealth"]
    },
    "strong": {
      attributes: ["DEX", "STR"],
      skills: ["combat morale", "unit discipline"]
    }
  }
]