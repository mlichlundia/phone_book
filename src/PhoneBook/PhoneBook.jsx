import React from 'react'
import { useState } from 'react'
import ContactContainer from '../ContactContainer/ContactContainer'
import data from '../data'
import './PhoneBook.css'
import SearchBar from '../SearchBar/SearchBar'

let obj = {}
for (let contact of data) {
  if (obj.hasOwnProperty(contact[0])) {
    obj[contact[0]].push(contact)
  } else {
    obj[contact[0]] = [contact]
  }
}

console.log(obj)
function sortContacts(list) {
  return list.sort((a, b) => {
    if (a > b) {
      return 1
    } else if (a < b) {
      return -1
    } else return 0
  })
}
let list = sortContacts(Object.values(obj))
list.map((contacts) => sortContacts(contacts))

function PhoneBook() {
  const [filterText, setFilterText] = useState('')
  function handleChange(value) {
    setFilterText(value)
  }

  return (
    <>
      <SearchBar onChange={handleChange} filterText={filterText} />

      <div className="main-container">
        {list.map((contacts, index) => (
          <ContactContainer
            key={index}
            contactList={contacts}
            filterText={filterText}
          />
        ))}
      </div>
    </>
  )
}

export default PhoneBook
