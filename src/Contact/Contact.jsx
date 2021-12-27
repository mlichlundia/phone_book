import React from 'react'
import { useState } from 'react'
import './Contact.css'

function Contact(props) {
  let [className, setClassName] = useState(props.className)
  let [highlightStatus, setHighlightStatus] = useState(true)

  function highlight() {
    let classHighlight = 'highlight'
    if (highlightStatus) {
      setClassName(className + ' ' + classHighlight)
      setHighlightStatus(false)
    } else {
      setClassName(props.className)
      setHighlightStatus(true)
    }
  }
  return (
    <p className={className} onClick={highlight}>
      {props.name}
    </p>
  )
}

export default Contact
