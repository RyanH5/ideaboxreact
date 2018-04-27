import React, { Component } from 'react';
import Form from './form'

const Card = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.Title}</h1>
      <h3>{props.Body}</h3>
      <button 
        className="deleteBtn"
        onClick={() => {props.deleteIdea(props.ID)}}>
        x
      </button>
    </div>
  )
}

export default Card;