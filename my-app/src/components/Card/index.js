import React from 'react';
import "../../styles/component/card.css"

const Card = (props) => {
    const { name, username, email, street } = props
  return (
    <div className='card-wrapper'>
        <p>Name: {name}</p>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
        <p>Street Address: {street}</p>
    </div>
  )
}

export default Card