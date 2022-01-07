import React from 'react'
import Contact from '../Contact/Contact'
import './ContactContainer.css'
import Letter from '../Letter/Letter'

function ContactContainer(props) {
  const contacts = props.contactList

  let filteredContacts = contacts.filter((contact) => {
    return contact.toLowerCase().includes(props.filterText.toLowerCase())
  })
  let letter = filteredContacts[0]?.[0]
  return (
    <div className="contact-container">
      {letter && <Letter letter={letter} />}

      {filteredContacts.map((contact) => (
        <Contact name={contact} key={contact} />
      ))}
    </div>
  )
}

export default ContactContainer
