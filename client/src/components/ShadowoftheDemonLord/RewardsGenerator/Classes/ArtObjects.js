import Valuable from './Vauable'

class ArtObjects extends Valuable {
  constructor() {
    super()
  }

  determineArtObject = (value) => {
    //Value in gold
    switch(value) {
      case (0.5):
        return ['silver ewer', 'carved bone effigy', 'cloth-of-gold vestments', 'thin gold bracelet', 'ebony velvet mask stiched with silver thread', 'copper goblet with silver filigree', 'pair of embossed bone dice', 'handheld mirror set in a painted wooden frame', 'embroidered silk handkerchief', 'silver locket with a painted portrait inside']
      case (5):
        return ['silver ring set with bloodstones', 'carved ivory statuette', 'silver bracelet with gold accents', 'silver necklace with a gemstone pendant', 'bronze crown', 'silk robe with gold embroidery', 'large rich tapestry', 'brass chalice with jade inlay', 'box of turquoise animal figurines', 'copper bird cage with gold filigree']
      case (15):
        return ['silver chalice set with moonstones', 'silver-plated sword scabard with jet set in the hilt', 'intricately carved wooden harp with ivory inlay and jasper gems', 'small gold idol', 'silver dragon comb set with sardonyx in the eyes', 'bottle stopper cokr embossed with golden leaves and set with jade', 'ceremonial dagger with topaz in the pommel', 'gold and ivory brooch', 'obsidian statuette with gold inlay', 'painted war mask with silver fittings']
      case (50):
        return ['elegent gold chain set with a fire opal', 'old masterpiece painting', 'embroidered silk and velvet mantle set with numerous moonstones', 'silver bracelet with star sapphire', 'embroidered gloves set with jewel chips', 'jeweled anklet', 'wooden music box with gold inlay and ivory figure', 'gold circlet set with four black pearls', 'carved mock eye set in blue sapphire and moonstone', 'a necklace string of small rose pearls']
      case (150):
        return ['jeweled gold crown', 'jeweled gold signet ring', 'small gold statuette set with rubies', 'gold goblet set with emeralds', 'silver jewelry box with gold inlay', 'painted ring box set with daimonds', 'jade game board with solid silver playing pieces', 'bejeweled ivory drinking horn with gold filigree']
      default:
        return []
    }
  }
}

export default ArtObjects