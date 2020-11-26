import React from 'react'

import BeastList from '../BeastList/BeastList'

const BeastTable = ({ beasts, beastButton, buttonType}) => {
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
      <BeastList beasts={beasts} beastButton={beastButton} buttonType={buttonType} />
    </table>
  );
}

export default BeastTable
