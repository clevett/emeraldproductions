class Gemstones {
  constructor() {
    _name = null
    _description = null
    _value = null
  }

  get name() { return this._name }
  get description() { return this._description }
  get value() { return this._value }

  set name(value) { this._name = value }
  set description(value) { this._description = value }
  set value(value) { this._value = value }

  determineGems = () => {
    //Value in gold
    switch(this.value) {
      case (5):
        return ['Azurite', 'Banded agate', 'Blue quartz', 'Eye agate', 'Hematite','Lapis lazuli', 'Malachite', 'Moss agate', 'Obsidian', 'Rhodochrosite', 'Tiger eye', 'Turquoise']
      case (10):
        return ['Bloodstone', 'Carnelian', 'Chalcedony', 'Chrysoprase', 'Citrine', 'Jasper', 'Moonstone', 'Onyx', 'Quartz', 'Sardonyx', 'Star rose quartz', 'Zircon']
      case (20):
        return ['Amber', 'Amethyst', 'Chrysoberyl', 'Coral', 'Garnet', 'Jade', 'Jet', 'Pearl', 'Spinel', 'Tourmaline']
      case (50):
        return ['Alexandrite', 'Aquamarine', 'Black pearl', 'Blue spinel', 'Peridot', 'Topaz']
      case (100):
        return ['Black opal', 'Blue sapphire', 'Emerald', 'Fire opal', 'Opal', 'Star ruby', 'Star sapphire', 'Yellow sapphire']
      case (200):
        return ['Black sapphire', 'Diamond', 'Jacinth', 'Ruby']
      default:
        return []
    }
  }

  // twoSilverGems = () => {

  // }

  // oneGoldGems = () => {

  // }
}

export default Gemstones