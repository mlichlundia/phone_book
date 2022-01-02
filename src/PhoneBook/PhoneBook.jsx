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
<<<<<<< HEAD

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
=======
>>>>>>> a5d382dce330b2e659c1d618c98db11397ed9fea

function PhoneBook() {
  return (
    <div className="main-container">
      {list.map((contacts, index) => (
        <ContactContainer key={index} contactList={contacts} />
      ))}
    </div>
  )
}

export default PhoneBook
