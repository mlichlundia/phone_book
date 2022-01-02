import React from 'react'
import Contact from '../Contact/Contact'
import './ContactContainer.css'

function ContactContainer(props) {
  return (
    <div className="contact-container">
      {props.contactList.map((contact) => (
        <Contact key={contact} name={contact} />
      ))}
    </div>
  )
}

export default ContactContainer
