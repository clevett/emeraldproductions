import React from 'react'

class SearchBar extends React.Component {
  state = { term: '' }

  //Defined as an arrow fuction to ensure this is correctly assigned
  onInputChange = event => this.setState({ term: event.target.value })

  //Stop browser from refreshing when user submits
  onFormSubmit = event => {
    event.preventDefault() //call callback from parent component
    this.props.onFormSubmit(this.state.term)
  }

  render() {
    return (
      <div className='search-bar ui segment'>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <label className='mr-2'>Search</label>
            <input
              type="text"
              //Create a Controlled input by assigning the value to state
              value={this.state.term}
              //Built in Callback function
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar