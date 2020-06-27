import React from 'react'
import Page from 'react-bootstrap'

class Pagination extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      offset: 0,
      data: [],
      perPage: 10,
      currentPage: 0
    }
    console.log(props)
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default Pagination