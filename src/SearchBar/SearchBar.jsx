import React from 'react'
import './SearchBar.css'

function SearchBar(props) {
  function searchItems(value) {
    props.onChange(value)
  }

  return (
    <input
      className="input"
      type="text"
      placeholder="Enter the contact"
      value={props.filterText}
      onChange={(e) => searchItems(e.target.value)}
    />
  )
}

export default SearchBar
