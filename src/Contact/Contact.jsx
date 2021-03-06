import React from 'react'
import { useState } from 'react'
import './Contact.css'
import classNames from 'classnames'

function Contact(props) {
  const [isHighlight, setIsHighlight] = useState(false)
  const contactClass = classNames({
    contact: true,
    highlight: isHighlight,
  })

  return (
    <p className={contactClass} onClick={() => setIsHighlight(!isHighlight)}>
      {props.name}
    </p>
  )
}

export default Contact
