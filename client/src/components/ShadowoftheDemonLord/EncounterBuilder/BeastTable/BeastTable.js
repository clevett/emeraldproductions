import React from 'react'

import BeastList from './BeastList/BeastList'

const BeastTable = props => {
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
      <BeastList beasts={props.beasts} beastButton={props.beastButton} buttonType={props.buttonType} />
    </table>
  );
}

export default BeastTable
