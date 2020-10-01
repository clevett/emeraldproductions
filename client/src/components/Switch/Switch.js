import React from 'react';
import './Switch.scss';

import { Form } from 'react-bootstrap'

class Switch extends React.Component {
	constructor(props) {
    super(props)
    this.state = {
      name: props.name,
			isOn: false
    }
  }

  handleChange = async () => {
    const updateStatus = this.state.isOn ? false : true
    await this.setState({ isOn: updateStatus })
    this.props.handleToggle(this.state.name, this.state.isOn)
  }

  render() {
    return (
      <Form.Switch
        key={this.state.name} 
        type="switch" 
        id={this.state.name}
        label={this.state.name} 
        value={this.state.name}
        onChange={this.handleChange}
      />
    )
  }
}

export default Switch;