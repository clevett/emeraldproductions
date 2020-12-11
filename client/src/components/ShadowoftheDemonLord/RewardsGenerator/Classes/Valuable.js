class Valuable  {
  constructor(type) {
    _type = type
    _name = null
    _description = null
    _value = null
  }

  get name() { return this._name }
  get description() { return this._description }
  get value() { return this._value }
  get type() { return this._type }

  set name(value) { this._name = value }
  set description(value) { this._description = value }
  set value(value) { this._value = value }

    //No tests for this as it is subject to change
    determineTreasure = (name) => {
      switch(name) {
        case 'starting':
          return [
            {
              name: 'gems',
              value: 0.1,
              roll: '2d4'
            }
          ]
        case 'novice':
          return [
            {
              name: 'gems',
              roll: '2d6',
              value: 0.1
            },
            {
              name: 'gems',
              roll: '2d4',
              value: 0.5
            },
            {
              name: 'gems',
              roll: '1d4',
              value: 1
            },
            {
              name: 'art',
              roll: '1d4',
              value: 1
            }
          ]
        case 'expert':
          return [
            {
              name: 'silver',
              roll: '8d6'
            },
            {
              name: 'gold',
              roll: '5d6'
            }
          ]
        case 'master':
          return [
            {
              name: 'silver',
              roll: '12d6'
            },
            {
              name: 'gold',
              roll: '8d6'
            }
          ]
        default:
          return []
      }
    }
}

export default Valuable