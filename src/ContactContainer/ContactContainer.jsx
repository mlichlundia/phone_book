import React from 'react'
import Contact from '../Contact/Contact'
import './ContactContainer.css'

function ContactContainer(props) {
  function sortContacts() {
    return props.contactList.sort((a, b) => {
      if (a > b) {
        return 1
      } else if (a < b) {
        return -1
      } else return 0
    })
  }
  return (
    <div className="contact-container">
      {sortContacts().map((contact, index) => (
        <Contact key={index} name={contact} className="contact" />
      ))}
    </div>
  )
}

export default ContactContainer
