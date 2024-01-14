import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Button = ({text, fab, handleClick, ref}) => {

  const fabStyling = {
    borderRadius: "50%",
    width: "4rem",
    height: "4rem",
    position: "fixed",
    bottom: "1rem",
    right: "1rem",
    boxShadow: "1px 1px 1px black"
  }

  return (
    <button className='btn' style={fab && fabStyling} onClick={handleClick}>
      {fab ? <FontAwesomeIcon icon={faPlus} size="lg" /> : text}
    </button>
  )
}

export default Button