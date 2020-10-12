import React from 'react'

import Option from './Option/Option'

class Select extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      options: props.options,
      selected: props.selected,
      label: props.label || '',
      id: props.id || '',
      value: ''
    }
  }

  handleChange = event => {
    this.setState({value: event.target.value})
    this.props.onSelectValueChange(event.target.value)
  }

  renderedList = options => options.map(option => <Option key={option} option={option} />)

  render() {
    return (
      <div>
        <label htmlFor={this.state.id} className='sr-only'>{this.state.label}</label>
        <select id={this.state.id} defaultValue={this.state.selected} onChange={this.handleChange}>{this.renderedList(this.state.options)}</select>
      </div>
    )
  }
}

export default Select
