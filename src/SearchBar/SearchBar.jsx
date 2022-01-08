import React from 'react'
import './SearchBar.css'

function SearchBar({ filterText, onChange }) {
  return (
    <input
      className="input"
      type="text"
      placeholder="Enter the contact"
      value={filterText}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default SearchBar
