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
}

export default Valuable