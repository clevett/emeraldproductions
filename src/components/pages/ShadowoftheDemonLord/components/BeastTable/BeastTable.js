import React from 'react'

import BeastList from '../BeastList/BeastList'

class BeastTable extends React.Component {
  render() {
    return (
      <table className="table text-white table-striped table-dark table-hover">
        <thead>
          <tr>
            <th scope='col'></th>
            <th scope="col">Name</th>
            <th scope="col">Difficulty</th>
            <th scope="col">Descriptor</th>
            <th scope="col">Source</th>
          </tr>
        </thead>
        <BeastList beasts={this.props.beasts} onBeastSelect={this.props.onBeastSelect} />
      </table>
    );
  }
}

export default BeastTable
