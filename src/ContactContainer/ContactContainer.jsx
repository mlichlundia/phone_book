import React from 'react'
import Contact from '../Contact/Contact'
import './ContactContainer.css'

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
<<<<<<< HEAD
=======
  sortContacts(props.contactList)
>>>>>>> a5d382dce330b2e659c1d618c98db11397ed9fea
  return (
    <div className="contact-container">
      {contacts.map((contact) => (
        <Contact key={contact} name={contact} />
      ))}
    </div>
  )
}

export default ContactContainer
