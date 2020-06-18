import React from 'react'

import Option from './Option/Option'

class Select extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      options: props.options,
      selected: props.selected
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = option => {
    console.log(option)
    this.setState({value: option})
  }

  renderedList = options => options.map(option => <Option key={option.toLowerCase()} option={option} />)

  render() {
    return (
      <select defaultValue={this.state.selected.toLowerCase()} onChange={this.onInputChange}>{this.renderedList(this.state.options)}</select>
    )
  }
}

export default Select
