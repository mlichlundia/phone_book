import React from 'react'
import Contact from '../Contact/Contact'
import './ContactContainer.css'
import Letter from '../Letter/Letter'

let contacts
function sortContacts(list) {
  console.log(list)
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
  return (
    <div className="contact-container">
      <Letter letter={contacts[0][0]} />
      {contacts.map((contact) => (
        <Contact key={contact} name={contact} />
      ))}
    </div>
  )
}

export default ContactContainer
