import React, { useState } from 'react'

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState('')

  const onInputChange = event => setTerm(event.target.value)

  const onFormSubmit = event => {
    event.preventDefault() //call callback from parent component
    onTermSubmit(term)
  }

  return (
    <div className='search-bar ui segment'>
      <form onSubmit={onFormSubmit}>
        <div>
          <label className='mr-2'>Search</label>
          <input
            type="text"
            value={term}
            onChange={onInputChange}
          />
        </div>
      </form>
    </div>
  )
}

export default SearchBar