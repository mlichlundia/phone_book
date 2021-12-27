import React from 'react'
import ContactContainer from '../ContactContainer/ContactContainer'
import Data from '../Data/Data'
import './PhoneBook.css'

function PhoneBook() {
  let map = new Map()
  for (let contact of Data) {
    if (map.has(contact[0])) {
      map.set(contact[0], map.get(contact[0]).concat(contact))
    } else map.set(contact[0], [contact])
  }

  let obj = Object.fromEntries(map.entries())

  return (
    <div className="main-container">
      {Object.values(obj).map((contacts, index) => (
        <ContactContainer key={index} contactList={contacts} />
      ))}
    </div>
  )
}

export default PhoneBook
