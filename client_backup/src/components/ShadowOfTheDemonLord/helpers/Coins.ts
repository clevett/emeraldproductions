export interface CoinValue {
  bit: number | null;
  copper: number | null;
  gold?: number | null;
  silver: number | null;
}

class Coins {
  goldLimitPerLevel: any;
  bits: number;
  cp: number;
  ss: number;
  gc: number;
  goldTotal: number;
  sum: number | undefined;
  constructor(limit: number | null) {
    this.goldLimitPerLevel = limit;
    this.bits = 0;
    this.cp = 0;
    this.ss = 0;
    this.gc = 0;
    this.goldTotal = 0;
  }

  get bit() {
    return this.bits;
  }
  get copper() {
    return this.cp;
  }
  get silver() {
    return this.ss;
  }
  get gold() {
    return this.gc;
  }
  get limit() {
    return this.goldLimitPerLevel;
  }
  get total() {
    return this.goldTotal;
  }

  set bit(value) {
    this.bits = value;
  }
  set copper(value) {
    this.cp = value;
  }
  set silver(value) {
    this.ss = value;
  }
  set gold(value) {
    this.gc = value;
  }
  set total(value) {
    this.goldTotal = value;
  }

  addAllCoins = (coins: Partial<CoinValue>) => {
    this.bit += coins.bit || 0;
    this.copper += coins.copper || 0;
    this.silver += coins.silver || 0;
    this.gold += coins.gold || 0;
  };

  convertToCoins(remainder: number): CoinValue {
    let coinage = remainder;

    const silver = Math.floor(coinage * 10);
    coinage -= silver / 10;

    const copper = Math.floor(coinage * 100);
    coinage -= copper / 100;

    const bit = Math.ceil(coinage * 1000);

    return { bit, copper, silver };
  }

  denomination = (divisor: number, result: number) => result / divisor;

  checkSumvsLimit = (sum: number) => (sum < this.limit ? true : false);

  getAllCoins = () => {
    return {
      bit: this.bits,
      copper: this.cp,
      silver: this.ss,
      gold: this.gc,
    };
  };

  getArrayCoins = () => {
    let array = [];
    const coins = this.getAllCoins();

    for (const [denomination, value] of Object.entries(coins)) {
      if (value > 0) {
        array.push({ name: denomination, value });
      }
    }

    return array;
  };

  getRemainder = (number: number) => number % 1;

  goldDivisor = (name: string) => {
    switch (name) {
      case "bit":
        return 1000;
      case "cp":
      case "copper":
        return 100;
      case "ss":
      case "silver":
        return 10;
      default:
        return 1;
    }
  };

  handleRoll = (results: { name: any; result: any }[]) => {
    let sum = 0;

    results.forEach(({ name, result }) => {
      const divisor = this.goldDivisor(name);
      sum += result / divisor;
      this.setCoins(name, result);
    });

    this.sum = sum;

    return { coins: this.getArrayCoins(), total: this.sum };
  };

  setCoins = (name: string, value: number) => {
    switch (name) {
      case "bit":
        this.bits = value;
        break;
      case "cp":
      case "copper":
        this.cp = value;
        break;
      case "ss":
      case "silver":
        this.ss = value;
        break;
      default:
        this.gc = value;
    }
  };
}

export default Coins;
