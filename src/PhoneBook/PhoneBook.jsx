import React from 'react'
import ContactContainer from '../ContactContainer/ContactContainer'
import data from '../data'
import './PhoneBook.css'

let obj = {}
for (let contact of data) {
  if (obj.hasOwnProperty(contact[0])) {
    obj[contact[0]].push(contact)
  } else {
    obj[contact[0]] = [contact]
  }
}

function PhoneBook() {
  return (
    <div className="main-container">
      {Object.values(obj).map((contacts, index) => (
        <ContactContainer key={index} contactList={contacts} />
      ))}
    </div>
  )
}

export default PhoneBook
