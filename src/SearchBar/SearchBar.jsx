import React from 'react'
import './SearchBar.css'

function SearchBar(props) {
  return (
    <input
      className="input"
      type="text"
      placeholder="Enter the contact"
      value={props.filterText}
      onChange={(e) => props.onChange(e.target.value)}
    />
  )
}

export default SearchBar
