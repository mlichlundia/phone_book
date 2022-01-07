import React from 'react'
import Contact from '../Contact/Contact'
import './ContactContainer.css'
import Letter from '../Letter/Letter'

let contacts
function sortContacts(list) {
  contacts = list
  contacts.sort((a, b) => {
    if (a > b) {
      return 1
    } else if (a < b) {
      return -1
    } else return 0
  })
}

function ContactContainer(props) {
  sortContacts(props.contactList)

  let filteredContacts = contacts.filter((contact) => {
    return contact.toLowerCase().includes(props.filterText.toLowerCase())
  })
  console.log(filteredContacts)
  let letter = filteredContacts[0]?.[0]
  return (
    <div className="contact-container">
      {letter ? <Letter letter={letter} /> : null}

      {filteredContacts.map((contact) => (
        <Contact name={contact} key={contact} />
      ))}
    </div>
  )
}

export default ContactContainer
