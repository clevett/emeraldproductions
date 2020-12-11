import Valuable from './Vauable'

class Gemstones extends Valuable {
  constructor() {
    super()
  }

  determineGems = (value) => {
    //Value in gold
    switch(value) {
      case (0.1):
        return ['Azurite', 'Banded agate', 'Blue quartz', 'Eye agate', 'Hematite','Lapis lazuli', 'Malachite', 'Moss agate', 'Obsidian', 'Rhodochrosite', 'Tiger eye', 'Turquoise']
      case (0.5):
        return ['Bloodstone', 'Carnelian', 'Chalcedony', 'Chrysoprase', 'Citrine', 'Jasper', 'Moonstone', 'Onyx', 'Quartz', 'Sardonyx', 'Star rose quartz', 'Zircon']
      case (1):
        return ['Amber', 'Amethyst', 'Chrysoberyl', 'Coral', 'Garnet', 'Jade', 'Jet', 'Pearl', 'Spinel', 'Tourmaline']
      case (5):
        return ['Alexandrite', 'Aquamarine', 'Black pearl', 'Blue spinel', 'Peridot', 'Topaz']
      case (10):
        return ['Black opal', 'Blue sapphire', 'Emerald', 'Fire opal', 'Opal', 'Star ruby', 'Star sapphire', 'Yellow sapphire']
      case (50):
        return ['Black sapphire', 'Diamond', 'Jacinth', 'Ruby']
      default:
        return []
    }
  }
}

export default Gemstones