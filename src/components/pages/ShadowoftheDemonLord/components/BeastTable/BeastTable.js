import React from 'react'

const BeastTableRow = props => (
  <tr>
    <th>
      <button className='btn btn-success'><span>+</span></button>
    </th>
    <th>{props.beastData.name}</th>
    <td>{props.beastData.difficulty}</td>
    <td>{props.beastData.descriptor}</td>
    <td>{props.beastData.source}</td>
  </tr>
)

class BeastTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = { term: '' }
  }

  beastList() {
    return this.props.filtered.map(beastData => <BeastTableRow beastData={beastData} key={beastData._id} />)
  }

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
        <tbody>
          {this.beastList()}
        </tbody>
      </table>
    );
  }
}

export default BeastTable
