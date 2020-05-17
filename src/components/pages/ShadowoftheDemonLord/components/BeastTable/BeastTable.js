import React from 'react'

const BeastTableRow = props => (
  <tr>
    <th>{props.beastData.name}</th>
    <td>{props.beastData.difficulty}</td>
    <td>{props.beastData.descriptor}</td>
    <td>{props.beastData.source}</td>
  </tr>
)

class BeastTable extends React.Component {
  beastList() {
    return this.props.beasts.map(beastData => <BeastTableRow beastData={beastData} key={beastData._id} />)
  }

  render() {
    return (
      <table className="table text-white table-striped table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Difficulty</th>
            <th scope="col">Descriptor</th>
            <th scope="col">Source</th>
          </tr>
        </thead>
        <tbody>
          {this.beastList()}
        </tbody>
      </table>
    );
  }
}

export default BeastTable
