import React, { Component } from 'react';
import Form from './form'

const Card = (props) => {
    console.log(props)
  return (
    <div>
      <h6>{props.ID}</h6>
      <h1>{props.Title}</h1>
      <h3>{props.Body}</h3>
      <button 
        className="deleteBtn"
        onClick={props.deleteIdea}>
        x
      </button>
    </div>
  )
}

export default Card;