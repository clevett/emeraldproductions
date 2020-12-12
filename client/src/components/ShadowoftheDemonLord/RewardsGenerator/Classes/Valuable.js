class Valuable  {
  constructor(level) {
    this._level = level
    this._name = ''
    this._description = ''
    this._value = 0
    this.rollForumlas = this.determineTreasure(level)
  }

  get name() { return this._name }
  get description() { return this._description }
  get value() { return this._value }
  get rolls() { return this.rollForumlas }

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
            roll: '1d6',
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
            name: 'gems',
            roll: '2d4',
            value: 1
          },
          {
            name: 'gems',
            roll: '2d6',
            value: 5
          },
          {
            name: 'gems',
            roll: '1d4',
            value: 10
          },
          {
            name: 'art',
            roll: '1d4',
            value: 5
          },
          {
            name: 'art',
            roll: '1d4',
            value: 10
          }
        ]
      case 'master':
        return [
          {
            name: 'gems',
            roll: '2d6',
            value: 10
          },
          {
            name: 'gems',
            roll: '3d6',
            value: 10
          },
          {
            name: 'gems',
            roll: '1d4',
            value: 50
          },
          {
            name: 'art',
            roll: '1d4',
            value: 10
          },
          {
            name: 'art',
            roll: '2d6',
            value: 50
          },
          {
            name: 'art',
            roll: '1d4',
            value: 100
          }
        ]
      default:
        return []
    }
  }
}

export default Valuable