import React from 'react'
import Contact from '../Contact/Contact'
import './ContactContainer.css'

function ContactContainer(props) {
  function sortContacts() {
    props.contactList.sort((a, b) => {
      if (a > b) {
        return 1
      } else if (a < b) {
        return -1
      } else return 0
    })
  }
  sortContacts()
  return (
    <div className="contact-container">
      {props.contactList.map((contact) => (
        <Contact key={contact} name={contact} />
      ))}
    </div>
  )
}

export default ContactContainer
